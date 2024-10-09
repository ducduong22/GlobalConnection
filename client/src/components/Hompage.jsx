import Header from "./Header";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../container/post/postSlice";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../container/post/userIdSlice";
import { setGroup } from "../container/groups/groupSlice";
import ThreeDPrinting from "./Menu3DPrinting";
import Arificial from "./MenuArtificial";
import Programming from "./MenuProgamimng";
import TechNews from "./MenuTechNews";
import Post from "./Post";
import ChatBox from "./ChatBox";
import ChatBoxList from "./ChatBoxList";
import axios from "axios";
import "../assets/stylesheets/css/Chatbox.css";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [input, setInput] = useState("");
  const groups = useSelector((state) => state.group.groups);
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.userId.userID);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showMainPost, setShowMainPost] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const visibleGroups = showMore ? groups : groups.slice(0, 3);

  const dispatch = useDispatch();

  const [join, setJoin] = useState(
    groups.reduce(
      (acc, group) => ({ ...acc, [group.id]: group.statusJoin }),
      {}
    )
  );
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(setSearch(value));
    if (value) {
      const filtered = posts.filter(
        (post) =>
          post.name.toLowerCase().includes(value.toLowerCase()) ||
          post.body.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts([]);
    }
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
    dispatch(setSearch(text));
    setFilteredPosts([]);
  };

  const handleClearInput = () => {
    setInput("");
    setFilteredPosts([]);
    dispatch(setSearch(""));
  };
  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleSelect = (id) => {
    setJoin((prevJoin) => {
      const updatedJoin = { ...prevJoin, [id]: !prevJoin[id] };

      return updatedJoin;
    });
  };

  const [fren, setfren] = useState(
    posts.reduce((acc, fren) => ({ ...acc, [fren.id]: fren.friendstatus }), {})
  );

  const handleSelectFren = (id) => {
    setfren((prevAdd) => {
      const updatedAdd = { ...prevAdd, [id]: !prevAdd[id] };
      return updatedAdd;
    });
  };

  const renderPost = () => {
    switch (selectedPost) {
      case "ThreeDPrinting":
        return <ThreeDPrinting />;
      case "Arificial":
        return <Arificial />;
      case "TechNews":
        return <TechNews />;
      case "Programming":
        return <Programming />;
      default:
        return null;
    }
  };

  const handleButtonClick = (post) => {
    setSelectedPost(post);
    setShowMainPost(false);
  };
  useEffect(() => {
    dispatch(setGroup());
    dispatch(setUserId());
  }, [dispatch]);

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

  const handleCloseChat = (contactId) => {
    setActiveChats((prevChats) =>
      prevChats.filter((chat) => chat.id !== contactId)
    );
  };
  const navigate = useNavigate();
  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };
  const handleProfileClick = (userId) => {
    navigate(`/profile-page/${user.name}/${userId}`);
  };

  return (
    <div>
      <Header />
      <div className="container_search  ">
        <div className="search_bar d-flex flex-row text-secondary-emphasis">
          <SearchOutlined className="ms-2 fs-4 p-2 text-white" />
          <input
            className="p-2 placeholder text-white"
            type="text"
            placeholder="Search..."
            value={input}
            onChange={handleSearchChange}
          />
          {input && (
            <button
              onClick={handleClearInput}
              className="clear-btn position-absolute  translate-middle fs-2 bg-transparent"
            >
              ×
            </button>
          )}
        </div>
        {input && (
          <div className="search-suggestions position-fixed rounded-5 rounded-top-0 ">
            {filteredPosts.map((post) => (
              <div key={post.id} className="suggestion">
                <div>
                  {/* Hiển thị name nếu nó chứa từ khóa tìm kiếm */}
                  {post.name.toLowerCase().includes(input.toLowerCase()) && (
                    <div
                      className="suggestion-name"
                      onClick={() => handleSuggestionClick(post.name)}
                    >
                      {post.name}
                    </div>
                  )}
                  {/* Hiển thị body nếu nó chứa từ khóa tìm kiếm */}
                  {post.body.toLowerCase().includes(input.toLowerCase()) && (
                    <div
                      className="suggestion-body"
                      onClick={() => handleSuggestionClick(post.body)}
                    >
                      {post.body}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="main">
        {/* ================================Left============================== */}

        <div className="Left">
          <a href="" className="Img home text-decoration-none">
            <i className="fa-solid fa-house fs-4 text-white"></i>
            <div className="fs-5 text-white ">Home</div>
          </a>

          <div
            onClick={() => handleProfileClick(user.userId)}
            className="Img text-decoration-none"
          >
            <img src={user.avatar} />

            <div className="text-white">{user.name}</div>
          </div>

          <hr />
          <div className="nav-item">
            <div
              className="Img position-relative"
              onClick={() => handleMenuClick("one")}
            >
              <i className="fa-solid fa-microchip fs-3 text-white"></i>
              <div className="nav-icon">Technology</div>
              <div className="position-absolute end-0 arrow text-white">
                &#9662;
              </div>
            </div>
            {openMenu === "one" && (
              <div className="nav-content">
                <div
                  className="nav-option"
                  onClick={() => handleButtonClick("ThreeDPrinting")}
                >
                  3D Printing
                </div>
                <div
                  className="nav-option"
                  onClick={() => handleButtonClick("Programming")}
                >
                  Programming
                </div>
                <div
                  className="nav-option"
                  onClick={() => handleButtonClick("TechNews")}
                >
                  Tech News
                </div>
                <div
                  className="nav-option"
                  onClick={() => handleButtonClick("Arificial")}
                >
                  Artificial Intelligence
                </div>
              </div>
            )}
          </div>

          <div className="nav-item">
            <div
              className="Img position-relative"
              onClick={() => handleMenuClick("two")}
            >
              <i className="fa-solid fa-tv fs-5 text-white"></i>
              <div className="nav-icon">Watch Tv</div>
              <div className="position-absolute end-0 arrow text-white">
                &#9662;
              </div>
            </div>
            {openMenu === "two" && (
              <div className="nav-content">
                <div className="nav-option">Action Movies </div>
                <div className="nav-option">Comedy Movies </div>
                <div className="nav-option">Crime & Mystery</div>
                <div className="nav-option">Horror Movies</div>
              </div>
            )}
          </div>

          <div className="nav-item">
            <div
              className="Img position-relative"
              onClick={() => handleMenuClick("three")}
            >
              <i className="fa-solid fa-gamepad fs-5 text-white"></i>
              <div className="nav-icon">Games</div>
              <div className="position-absolute end-0 arrow text-white">
                &#9662;
              </div>
            </div>
            {openMenu === "three" && (
              <div className="nav-content">
                <div className="nav-option">Action and Adventure game</div>
                <div className="nav-option">Esports</div>
                <div className="nav-option">Racing games</div>
                <div className="nav-option">Strategy games</div>
              </div>
            )}
          </div>

          <div className="nav-item">
            <div
              className="Img position-relative"
              onClick={() => handleMenuClick("four")}
            >
              <i className="fa-solid fa-newspaper fs-4 text-white"></i>
              <div className="nav-icon">News</div>
              <div className="position-absolute end-0 arrow text-white">
                &#9662;
              </div>
            </div>
            {openMenu === "four" && (
              <div className="nav-content">
                <div className="nav-option">Sports Football, Basketball...</div>
                <div className="nav-option">Animal world</div>
                <div className="nav-option">Hot On The Network</div>
                <div className="nav-option">Health</div>
              </div>
            )}
          </div>

          <hr />
        </div>

        {/* ================================Right============================== */}
        <div className="Right">
          <div className="first_warpper">
            <div className="page">
              <h2>POPULAR COMMUNITIES</h2>
            </div>
            <hr />
          </div>
          <div>
            {visibleGroups.map((group) => {
              return (
                <div key={group.id}>
                  <div className="Img position-relative">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.zZYDX2AZQRctCw0rdTYlwQHaGm&pid=Api&P=0&h=220" />
                    <i className="text-white">{group.name}</i>
                    <button
                      className={`me-2 px-2 text-white position-absolute top-50 end-0 translate-middle-y ${
                        join[group.id] ? "bg-secondary" : "gradient-btn-group "
                      }`}
                      onClick={() => handleSelect(group.id)}
                    >
                      {join[group.id] ? " Joiner " : "Join "}
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              className="bg-transparent text-white mt-1"
              onClick={handleToggle}
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
          <hr />
          <div>
            <h2 className="text-white fs-6 text-uppercase">
              Friendship suggestions
            </h2>
            <div>
              {userId.map((u) => {
                return (
                  <div className="" key={u.id}>
                    <div className="d-flex flex-row mb-3 Img position-relative ">
                      <div
                        className="d-flex friendship-suggestions"
                        onClick={() => handleUserClick(u.userId)}
                      >
                        <img src={u.avatar} />
                        <div className="pt-3 ms-1 text-white text-decoration-none">
                          {u.name}
                        </div>
                      </div>
                      <button
                        className={`me-2 px-2 text-white position-absolute top-50 end-0 translate-middle-y ${
                          fren[u.id] ? "bg-secondary" : "gradient-btn-group "
                        }`}
                        onClick={() => handleSelectFren(u.id)}
                      >
                        {fren[u.id] ? " Cancel " : "+ Add friends"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />

          <div className="third_warpper">
            <div className="contact_tag">
              <h2>Contacts</h2>

              <div className="contact_icon text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>

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
        <div className="chat-windows">
          {activeChats.map((chat) => {
            const contact = contacts.find((c) => c._id === chat.id);
            return (
              <div key={chat.id} className="chat-container rounded-top me-2">
                <div className="chat-header">
                  <img className="chat-header-img" src={contact.avatar} />
                  <div>{contact ? contact.name : "Loading..."}</div>
                  <div
                    className="chat-header-close position-absolute top-50 end-0 translate-middle-y"
                    onClick={() => handleCloseChat(chat.id)}
                  >
                    X
                  </div>
                </div>
                <hr />
                <div className="chat-box">
                  <ChatBoxList senderId={user._id} receiverId={chat.id} />
                </div>
                <hr />
                <div>
                  <ChatBox senderId={user._id} receiverId={chat.id} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="center">
          <div className="my_post">
            {showMainPost ? <Post /> : renderPost()}
          </div>

          {/* ====================ListPost===================== */}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
