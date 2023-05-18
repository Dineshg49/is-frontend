import {
    AxiosHeaders,
    AxiosResponse,
    RawAxiosRequestHeaders,
    RawAxiosResponseHeaders,
} from "axios";
import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatBlock from "./Chatblock";
import { AnswerFile } from "./AnswerFile";
import { Popup } from "./Popup";
import "./customStyles.css"


export function ChatSpace(props) {
    const [selected, setSelected] = useState(100);
    const [page, setPage] = useState(null);
    const [show, setShow] = useState(false);
    const [loadNum, setLoadNum] = useState(10);
    const [language, Setlanguage] = useState(localStorage.getItem("language"));

    return (
        <>
            <div
                id="chatspace"
                style={{
                    position: "absolute",
                    width: "25vw", //50
                    height: "70vh", //65
                    background: "white",
                    borderRadius: "11px",
                    left: "23%",
                    top: "18%", //10
                    padding: "40px",
                    boxShadow: "0px 0px 10px 4px #00000017",
                    overflowY: "scroll",
                }}
            >
                {!props.question && (
                    <div
                        className="bubbleLeft"
                        style={{
                            background: "#b4d8f8",
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: "12px",
                            padding: "20px",
                            position: "relative",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "3%",
                            }}
                        >
                            <p
                                style={{
                                    marginLeft: "6%",
                                    width: "346px",
                                    maxWidth: "12vw",
                                }}
                            >
                                Hey there! What can I help you with today?
                            </p>
                        </div>
                    </div>
                )}

                {props.question && (
                    <>
                        <div
                            className="bubbleRight"
                            style={{
                                background: "#0085e5",
                                width: "fit-content",
                                height: "fit-content",
                                position: "relative",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px",
                                color: "white",
                                marginLeft: "auto",
                                marginBottom: "20px",
                                maxWidth: "12vw",
                            }}
                        >
                            <span>{props.question}</span>
                        </div>

                        {props.answers.map(
                            (answer, i) =>
                                i + 1 <= loadNum && (
                                    <ChatBlock
                                        i={i}
                                        loadNum={loadNum}
                                        answer={answer}
                                        setLoadNum={setLoadNum}
                                    />
                                )
                        )}
                    </>
                )}

                
            </div>
            {show && (
                <Popup
                    updateShow={() => {
                        setShow(false);
                        setSelected(100);
                        setPage(null);
                    }}
                >
                    <AnswerFile
                        answer={props.answers[selected]}
                        selected={selected}
                        page={page}
                    />  
                </Popup>
            )}
        </>
    );
}
