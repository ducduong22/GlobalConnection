import { useState } from "react";
import axios from "axios";

const ChatBox = ({ senderId, receiverId }) => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    try {
      await axios.post("http://localhost:3002/messages", {
        senderId,
        receiverId,
        content: message,
      });
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="input-container">
      <textarea
        className="chat-input"
        value={message}
        onKeyPress={handleKeyPress}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
