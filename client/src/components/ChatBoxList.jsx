import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ChatBoxList = ({ senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/messages`, {
          params: { senderId, receiverId },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    if (senderId && receiverId) {
      fetchMessages();
    }
  }, [messages, senderId, receiverId]);

  const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - messageDate) / (1000 * 60 * 60);

    // If more than 24 hours, show the date; otherwise, show the time (hour and minute)
    if (diffInHours > 24) {
      return messageDate.toLocaleDateString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
    } else {
      return messageDate.toLocaleTimeString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  return (
    <div className="chat-box">
      {messages.map((msg) => (
        <div
          key={msg._id}
          className={`message ${user._id === msg.senderId ? "you" : "them"}`}
        >
          <div>{msg.content}</div>
          <div className="timestamp">{formatTimestamp(msg.createdAt)}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBoxList;
