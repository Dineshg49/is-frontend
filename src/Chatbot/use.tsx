import React, { useEffect, useMemo, useState } from "react";
import {
  IconButton,
  TextField,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import {
  getMeiliRecommendations,
  sendMessage,
} from "../../utils/APIUtils";
import { PaperPlaneTilt, StopCircle } from "phosphor-react";
import AWS from "aws-sdk";

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
    const meiliRecommendations = document.getElementById(
      "meiliRecommendations"
    );
    document.addEventListener("click", function (event) {
      if (!meiliRecommendations.contains(event.target)) {
        setRecommendations([]);
      }
    });
  }, []);

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
      <div id="meiliRecommendations">
        {recommendations.length > 0 && (
          <div
            className="recommendations"
            style={{
              position: "absolute",
              width: "fit-content",
              left: "23%",
              bottom: "14vh",
              borderRadius: "6px",
              background: "white",
              padding: "15px",
              boxShadow: "0px 0px 5px 1px #0000001f",
              height: "166px",
            }}
          >
            <h3
              style={{
                padding: "8px",
                margin: 0,
                fontSize: "18px",
              }}
            >
              Recent Questions
            </h3>
            {recommendations.map((item, index) => (
              <div
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => {
                  Ask(item.query_string);
                }}
              >
                {item.query_string}
              </div>
            ))}
          </div>
        )}
      </div>

      <span
        className="messageBar"
        style={{
          position: "absolute",
          width: "calc(69% + 56px)",
          height: "60px",
          top: "85vh",
          left: "23%",
          borderRadius: "8px",
          background: "white",
          padding: "10px",
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
                sessionStorage.getItem("company_id") as string
              ).then((res: any) => {
                console.log(res, "Recommendations");
                setRecommendations(res);
                
              });
          }}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          value={question ? question : ""}
          label="Ask Me Anything!"
          variant="filled"
        />
        <span
          style={{
            position: "relative",
            left: "calc(100% - (80px + 30px))",
            top: "-52px",
          }}
        >
          {" "}
          {loading ? (
            <IconButton>
              <CircularProgress />
            </IconButton>
          ) : (
           <>
           </>
          )}
        </span>
        <span
          style={{
            position: "relative",
            left: "calc(100% - (80px + 30px))",
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
