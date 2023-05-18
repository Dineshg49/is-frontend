import React, { useEffect, useMemo, useState } from "react";
import {
    IconButton,
    TextField,
    InputLabel,
    CircularProgress,
} from "@mui/material";

import { Microphone, PaperPlaneTilt, StopCircle } from "phosphor-react";
import AWS from "aws-sdk";
import "./customStyles.css"
import axios from 'axios';

function getMeiliRecommendations(query, company_id) {
    return new Promise((resolve, reject) => {
        const payload = {
            q: query,
            filter: "company_id = " + company_id,
        };
        axios
            .post(
                "https://app.subtl.ai/meili" + "/indexes/transactions/search",
                payload,
                {
                    headers: {
                        "X-Meili-API-Key":
                            "2915d2cbaa7472f3f7acdf6429354e6b4e1e2fd3a5a67f16260bb97196f87086",
                    },
                }
            )
            .then((response) => {
                let returns = response.data.hits.slice(0, 4);
                resolve(returns);
            });
    });
}


function sendMessage(query, company_group, access_token) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "https://app.subtl.ai/api/transactions",
                {
                    query_string: query,
                    target_id: company_group,
                },
                {
                    headers: { Authorization: "Bearer " + access_token },
                }
            )
            .then((response) => {
                if (response.status == 201) {
                    resolve(response.data.answers);
                }
            });
    });
}



const chatFunctions = {
    updateMessages: (messages) => { },
    updateQuestion: (question) => { },
};


AWS.config.update({
    accessKeyId: "AKIA3BOLL3RQW4AXHILC",
    secretAccessKey: "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",
    region: "us-east-2",
});

const s3 = new AWS.S3();

async function uploadFile(file) {
    console.log("Upload File started");
    let temp = file.name.split(".");
    let fileExtension = temp[temp.length - 1];
    let fileName = file.name.replace(/[^a-zA-Z0-9]/g, "_");
    fileName = fileName + "." + fileExtension;
    let url =
        "https://bahubhashak-iiit.s3.us-east-2.amazonaws.com/ts/" + fileName;
    const params = {
        Bucket: "bahubhashak-iiit",
        Key: "ts/" + fileName,
        ACL: "public-read",
        ContentType: file.type,
        Body: file,
    };

    return new Promise((resolve, reject) => {
        s3.putObject(params)
            .on("httpUploadProgress", (evt) => {
                // that's how you can keep track of your upload progress
            })
            .on("complete", (data) => {
                resolve(url);
            })
            .send((err) => {
                if (err) {
                    reject(err);
                }
            });
    });
}

export function MessageBar(props) {
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [language, setLanguage] = useState(localStorage.getItem("language"));
    let answers = [];

    

    useEffect(() => {
        if (recommendations.length > 0) console.log(recommendations);
    }, [recommendations]);

    function Ask(query) {
        let ask = "";
        console.log(query, "Ask Triggered");
        if (query !== undefined) {
            ask = query;
        } else {
            ask = question;
        }

        props.chatFunctions.updateQuestion(ask);
        sendMessage(
            ask,
            sessionStorage.getItem("company_group"),
            sessionStorage.getItem("access_token")
        ).then((res) => {
            if (language === "ENG") {
                props.chatFunctions.updateMessages(res);
                res.map((data) => {
                    console.log(data.answer, "Anaswers");
                });
            } else {
                props.chatFunctions.updateMessages(
                    res.map((obj) => ({
                        answer: obj.answer,
                        id: obj.id,
                        phrase: obj.phrase,
                    }))
                );
            }
        });
        setQuestion(null);
        setRecommendations([]);
    }


    return (
        <>

            <span
                className="messageBar"
                style={{
                    position: "absolute",
                    width: "calc(25%)",
                    height: "60px",
                    top: "80vh",
                    left: "23%",
                    borderRadius: "8px",
                    background: "white",
                    padding: "10px",
                    zIndex:100
                }}
            >
                <TextField
                    autoComplete="off"
                    style={{ width: "100%" }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            Ask();
                            return;
                        }
                        if (question)
                            getMeiliRecommendations(
                                question,
                                sessionStorage.getItem("company_id")
                            ).then((res) => {
                                console.log(res, "Recommendations");
                                setRecommendations(res);
                            });
                    }}
                    onChange={(e) => {
                        setQuestion(e.target.value);
                    }}
                    value={question ? question : ""}
                    label="Type your message here"
                    variant="filled"
                />


                <span
                    style={{
                        position: "relative",
                        left: "calc(100% - (50px))",
                        top: "-52px",
                    }}
                >
                    <IconButton onClick={() => Ask()}>
                        <PaperPlaneTilt
                            weight="fill"
                            size={32}
                        />
                    </IconButton>
                </span>
            </span>
        </>
    );
}
