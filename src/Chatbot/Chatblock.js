import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const ChatBlock = (props) => {
  const [answerPro, setAns] = useState("");
  const [loading, setLoading] = useState(false);
  let lang = localStorage.getItem("language");

  useEffect(() => {
    setAns(props.answer.answer);
  }, [lang]);

  return (
    <>
      <div
        className="bubbleLeft"
        style={{
          cursor: "pointer",
          background: "#b4d8f8",
          width: "80%",
          height: "fit-content",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          maxWidth: "80%",
          position: "relative",
        }}
      >
        {loading ? <CircularProgress /> : <>{answerPro}</>}
      </div>
      {props.i + 1 === props.loadNum && (
        <>
          {props.answers && props.answers.length - props.loadNum !== 0 && (
            <Button
              onClick={() => {
                if (props.answers.length >= props.loadNum + 2) {
                  let newnum = props.loadNum + 2;
                  props.setLoadNum(newnum);
                } else if (props.answers.length >= props.loadNum + 1) {
                  let newnum = props.loadNum + 1;
                  props.setLoadNum(newnum);
                }
              }}
              variant="outlined"
            >
              Load More
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default ChatBlock;
