import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../container/post/userIdSlice";
import Header from "./Header";
import { HeartFilled } from "@ant-design/icons";
import { mockComments } from "../store/mocks";
import { setPosts } from "../container/post/postSlice";
const PostDetail = () => {
  const { userId } = useParams(); // Lấy userId từ URL params
  const dispatch = useDispatch();
  const [activePostId, setActivePostId] = useState(null);
  const getUserIds = useSelector((state) => state.userId.userID);
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.post.posts);
  const [likedPosts, setLikedPosts] = useState({});
  const [likeStatus, setLikeStatus] = useState(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: post.handlelike }), {})
  );

  const handleCommentClick = (postId) => {
    setActivePostId((prevPostId) => (prevPostId === postId ? null : postId));
  };

  const handleLikeClick = (postId) => {
    setLikeStatus((Status) => {
      const newLikeStatus = {
        ...Status,
        [postId]: !Status[postId],
      };
      console.log(
        `Like status for post with id ${postId}:`,
        newLikeStatus[postId]
      );
      return newLikeStatus;
    });
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
    setLikedPosts((prevStatus) => ({
      ...prevStatus,
      [postId]: !prevStatus[postId],
    }));
  };

  useEffect(() => {
    dispatch(setPosts()); // Dispatch action để bắt đầu quá trình tải dữ liệu
    dispatch(setUserId());
  }, [dispatch]);

  // Lọc các bài viết theo userId
  const userPosts = posts.filter((post) => post.userId === parseInt(userId));
  const getUserId = getUserIds.filter((u) => u.userId === parseInt(userId));

  const [showFriends, setShowFriends] = useState(false);
  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  const [fren, setfren] = useState(
    posts.reduce((acc, fren) => ({ ...acc, [fren.id]: fren.friendstatus }), {})
  );

  const handleSelectFren = (id) => {
    setfren((prevAdd) => {
      const updatedAdd = { ...prevAdd, [id]: !prevAdd[id] };
      console.log(`add ID ${id} add status:`, updatedAdd[id]);
      return updatedAdd;
    });
  };

  console.log("so ID", userId);
  console.log(getUserId);
  return (
    <>
      <Header />{" "}
      {getUserId.map((userid) => (
        <div key={userid.id} className="main_profile ">
          <div className="Left ">
            <div className="my_profile">
              <div className="Avatar ">
                <div className="backgroud rounded-top">
                  <img
                    src={userid.avatar}
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="Profile"
                  />
                </div>
                <div className="backgroud-bottom"></div>
                <div className="card-body text-center">
                  <h5 className="card-title text-white fw-bolder fs-3">
                    {userid.name}
                  </h5>
                </div>
                <div className="my-3 d-flex flex-row justify-content-center ">
                  <button
                    className={`btn-addfriend text-white rounded p-2 ${
                      fren[userid.id] ? "bg-secondary" : "gradient-btn-group "
                    }`}
                    onClick={() => handleSelectFren(userid.id)}
                  >
                    {fren[userid.id] ? " - Cancel " : "+ Add friends"}
                  </button>
                  <button className="btn p-2 ms-2">
                    <i className="fa-regular fa-message"></i> Message
                  </button>
                </div>
              </div>
              <hr />
              <hr />
              <div
                className=" mb-2  "
                style={{ width: "327px", height: "50px" }}
              >
                <h5 className="card-text p-1 text-white">Introduce </h5>
              </div>
              <hr />
              <div className=" " style={{ width: "327px", height: "50px" }}>
                <h5 className="card-text p-1 text-white">Images </h5>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row mb-3">
            <div className="center rounded-3">
              <div className="my_post">
                <div className="post_top">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.zZYDX2AZQRctCw0rdTYlwQHaGm&pid=Api&P=0&h=220" />
                  <input
                    type="text"
                    placeholder={`Write something to ${userid.name}?`}
                  ></input>
                </div>
                <hr />
                <hr />
              </div>
              {userPosts.map((post) => (
                <div key={post.id}>
                  <div>
                    <div className="">
                      <div className="friends_post">
                        <div className="friend_post_top">
                          <div className="Img_and_name">
                            <img className="Img" src={post.avatar} />
                            <div className="friends_name text-white">
                              <p className="friends_name text-white">
                                {post.name}
                              </p>
                              <p className="time text-white">
                                {post.datepost}
                                <i className="fa-solid fa-user-group"></i>
                              </p>
                            </div>
                          </div>

                          <div className="menu">
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                        </div>
                        <div>
                          <div className="text-capitalize text-white mt-3 mb-2">
                            {post.body}
                          </div>
                        </div>
                        {post.img && <img src={post.img} />}

                        <div className="info">
                          <div className="emoji_img">
                            <p className="text-white ">
                              {likedPosts[post.id]
                                ? post.likes + 1
                                : post.likes}{" "}
                              like
                            </p>
                          </div>

                          <div className="comment">
                            <p className="text-white">{post.comment} </p>
                            <i className="fa-solid fa-comment fs-5 text-white"></i>
                            <p className="text-white">{post.share}</p>
                            <i className="fa-solid fa-share-from-square fs-5 text-white"></i>
                          </div>
                        </div>

                        <hr />
                        {/*---------------------------------------------------------------------------*/}

                        <div className="like">
                          <div className="like_icon">
                            <button className="bg-transparent">
                              <HeartFilled
                                onClick={() => handleLikeClick(post.id)}
                                style={{
                                  color: likeStatus[post.id] ? "red" : "white",
                                  fontSize: "24px",
                                }}
                              />
                            </button>
                          </div>

                          <div className="like_icon">
                            <i className="fa-solid fa-message text-white"></i>
                            <button
                              className="bg-transparent text-white"
                              onClick={() => handleCommentClick(post.id)}
                            >
                              Comments
                            </button>
                          </div>

                          <div className="like_icon">
                            <i className="fa-solid fa-share text-white"></i>
                            <p className="text-white">Share</p>
                          </div>
                        </div>
                        <hr />

                        {/*---------------------------------------------------------------------------*/}
                        {activePostId === post.id && (
                          <div className="comments-section">
                            {mockComments
                              .filter((comment) => comment.postId == post.id)
                              .map((comment) => (
                                <div className="row" key={comment.id}>
                                  <div className="col-auto ms-3 mt-2">
                                    <img
                                      className="rounded-circle"
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nLCu85ayoTKwYw6alnvrockq5QBT2ZWR2g&usqp=CAU"
                                      style={{ height: "38px", width: "43px" }}
                                    ></img>
                                  </div>
                                  <div className="col-10 mt-2 bg-secondary rounded-4">
                                    <div className="mb-1 text-capitalize fs-6 text-white ">
                                      {comment.name}
                                    </div>
                                    <div className="text-white ">
                                      {comment.body}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row mb-3 comment_reply ">
                                    <button className="bg-transparent p-2">
                                      <HeartFilled
                                        onClick={() =>
                                          handleLikeClick(comment.id)
                                        }
                                        style={{
                                          color: likeStatus[comment.id]
                                            ? "red"
                                            : "white",
                                          fontSize: "24px",
                                        }}
                                      />
                                    </button>
                                    <button className="bg-transparent mt-1 text-dark mb-2 text-white p-2 ml-0">
                                      Reply to
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                        <hr />
                        {/*---------------------------------------------------------------------------*/}
                        <div className="comment_warpper">
                          <img src={user.avatar} />
                          <div className="circle"></div>

                          <div className="comment_search">
                            <input
                              className="placeholder"
                              type="text"
                              placeholder="Write a comment"
                            />
                            <i className="text-white fa-regular fa-face-smile"></i>
                            <i className="text-white  fa-solid fa-camera"></i>
                            <i className="text-white  fa-regular fa-note-sticky"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="floating-button">
            <button onClick={toggleFriends}>
              <i className="fa-regular fa-message fs-5"></i>
            </button>
          </div>
          {showFriends && (
            <div className="friends-frame rounded-4">
              {/* Display 10 friends here */}
              <ul>
                <li></li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PostDetail;
