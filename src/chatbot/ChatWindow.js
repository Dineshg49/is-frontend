import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";
import { BiSend } from "react-icons/bi";
import Chaticon from '../Img/chaticon.png';
import Chatclose from '../Img/chatclose.png'

const ChatWindow = ({ onClose }) => {



  const [messages, setMessages] = useState([
    { text: "Hey! How have you been?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const botResponses = [
    { text: "I'm sorry, I didn't understand.", sender: "bot" },
    { text: "Could you please rephrase that?", sender: "bot" },
    { text: "I'm not sure I understand. Can you explain?", sender: "bot" },
    { text: "I'm still learning. Can you try again?", sender: "bot" }
  ];

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setUserMessage("");

      // Delay the bot's response by one second
      setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

        setMessages((prevMessages) => [
          ...prevMessages,
          randomResponse
        ]);
      }, 1000);
    }
  };

  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);


  return (
    <div className="chat-window">
      <div className="chat-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ padding: "0 0.82vw 0 0", width: "4vw" }} src={Chaticon} alt="icon" />
          <div>
            <div style={{ fontSize: "1.5vw", color: "4D4D4D", fontWeight: 500 }}>Chatbot</div>
            <div style={{ fontSize: "1vw", color: "#898989", fontWeight: 300 }}>Online</div>
          </div>
        </div>
        <div className="chat-header-close" onClick={onClose}>
          <img style={{ padding: "0 0.82vw 0 0", width: "2vw" }} src={Chatclose} alt="icon" />

        </div>

      </div>
      <div className="chat-messages" ref={messagesRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"
              }`}
          >
            <div
              className={`chat-bubble ${message.sender === "user" ? "user-bubble" : "bot-bubble"
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
  <input
    type="text"
    className="chat-input"
    placeholder="Type your message..."
    value={userMessage}
    onChange={handleUserMessageChange}
    style={{ maxWidth: '90%' }}
    onKeyDown={(event) => {
      if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default behavior of enter key
        handleSendMessage();
      }
    }}
  />
  <button className="send-message-button" onClick={handleSendMessage}>
    <BiSend />
  </button>
</div>

    </div>
  );
};

export default ChatWindow;
