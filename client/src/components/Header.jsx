import { useState, useEffect, useRef } from "react";
import "../assets/stylesheets/css/Homepage.css";
import "../assets/stylesheets/css/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import logo from "../assets/image/logoWeb.png";
const Title = () => {
  const [showSetting, setshowSetting] = useState(false);
  const [showChatList, setshowChatList] = useState(false);
  const Setting = useRef();
  const ChatList = useRef();
  const user = useSelector((state) => state.user.user);
  const [contacts, setContacts] = useState([]);
  const [activeChats, setActiveChats] = useState([]);

  const closeBothModals = () => {
    setshowSetting(false);
    setshowChatList(false);
  };

  const handleOutsideClick = (event) => {
    if (Setting.current && !Setting.current.contains(event.target)) {
      setshowSetting(false);
    }
    if (ChatList.current && !ChatList.current.contains(event.target)) {
      setshowChatList(false);
    }
  };

  const handleScroll = () => {
    closeBothModals();
  };

  useEffect(() => {
    if (showSetting || showChatList) {
      document.addEventListener("mousedown", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, showChatList, showSetting]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3002/users");
        console.log("Contacts fetched from server:", response.data);
        const filteredContacts = response.data.filter(
          (u) => u._id !== user._id
        );
        setContacts(filteredContacts);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      }
    };

    fetchContacts();
  }, []);
  const handleContactClick = (contactId) => {
    const chatExists = activeChats.some((chat) => chat.id === contactId);
    if (!chatExists) {
      if (activeChats.length >= 3) {
        setActiveChats((prevChats) => prevChats.slice(1));
      }
      setActiveChats((prevChats) => [...prevChats, { id: contactId }]);
    }
  };
  return (
    <div>
      <nav>
        <div className="Left">
          <a href="/homepage">
            <div className="Logo">
              <img src={logo} />
            </div>
          </a>
        </div>

        <div className="Right">
          <i
            className="fa-regular fa-message text-white"
            onClick={() => {
              setshowChatList(!showChatList);
              setshowSetting(false);
            }}
          ></i>
          <img
            src={user.avatar}
            onClick={() => {
              setshowSetting(!showSetting);
              setshowChatList(false);
            }}
          />
        </div>
        {showSetting && (
          <div className="setting-frame rounded-2">
            <div ref={Setting}>
              <Link to="/login" className="text-decoration-none text-dark ms-5">
                Log Out <i className="ms-1 fa-solid fa-right-from-bracket"></i>
              </Link>
            </div>
          </div>
        )}

        {showChatList && (
          <div className="chatlist-frame rounded-2" ref={ChatList}>
            <div className="third_warpper">
              <div className="contact d-flex flex-column mb-3">
                {contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="contact-item text-white Img"
                    onClick={() => handleContactClick(contact._id)}
                  >
                    <img src={contact.avatar} />
                    <i className="text-white text-decoration-none">
                      {contact.name}
                    </i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Title;
