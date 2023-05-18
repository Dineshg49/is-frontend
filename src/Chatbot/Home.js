import React, { useEffect, useState } from "react";
import "./customStyles.css";
import { ChatSpace } from "./Chatspace";
import { MessageBar } from "./MessageBar";


export const chatFunctions = {
    updateMessages: (messages) => { },
    updateQuestion: (question) => { },
};

const Answer = {
    answer: "",
    id: "",
    transaction_id: "",
    phrase: "",
    group_id: "",
    page_no: 0,
    document_id: "",
    metadata: ["", 0, 0],
    document_type: "",
    document_name: "",
};

const GroupItem = {
    id: "",
    name: "",
    upload_date: "",
    document_url: "",
    document_type: "",
    company_id: "",
    upload_status: "Done" || "Processing",
    pages: 0,
    creation_date: "",
    user_name: "",
    file_size: "",
};


export default function HomePage() {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const updateMessages = (answers) => {
        setAnswers(answers);
    };
    const updateQuestion = (question) => {
        setQuestion(question);
        setAnswers([]);
    };

    const chatFunctions = {
        updateMessages: updateMessages,
        updateQuestion: updateQuestion,
    };

    useEffect(() => {
        let token = sessionStorage.getItem("access_token");
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    return loggedIn ? (
        <div style={{ display: "flex",flexDirection:"column" }} className="homePage">
            <div >
            <ChatSpace answers={answers} question={question} />
            <MessageBar chatFunctions={chatFunctions} />
            </div>
      </div>
    ) : (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            Sorry Please{" "}
            <a style={{ margin: "5px" }} href={"/"}>
                Login
            </a>{" "}
            to Access this Page
        </div>
    );
}



