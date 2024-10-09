import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPosts,
  addPostRequest,
  deletePostRequest,
} from "../store/post/postSlice";
import { HeartFilled } from "@ant-design/icons";
import "../assets/stylesheets/css/Comment.css";
import "../assets/stylesheets/css/Modal.css";
import "../assets/stylesheets/css/Homepage.css";

import {
  format,
  formatDistanceToNow,
  parseISO,
  differenceInHours,
} from "date-fns";
import { enUS } from "date-fns/locale";
import {
  addCommentRequest,
  deleteCommentRequest,
  setComments,
} from "../store/comment/commentSlice";
const Post = () => {
  const [newPost, setNewPost] = useState({ body: "", img: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [activePostId, setActivePostId] = useState(null);
  const posts = useSelector((state) => state.post.posts);
  const search = useSelector((state) => state.search.search);
  const comments = useSelector((state) => state.comment.comments);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const deleteModalRef = useRef();
  const [newComment, setNewComment] = useState({
    body: "",
    postId: null,
  });
  const [likedPosts, setLikedPosts] = useState({});
  const addPost = () => {
    const postData = {
      ...newPost,
      userId: user._id,
      avatar: user.avatar,
      name: user.name,
      comment: 0,
      share: 0,
      likes: 0,
      datepost: new Date().toISOString(),
    };

    dispatch(addPostRequest(postData));
    setNewPost({ body: "", img: "" });
    setIsModalOpen(false);
  };

  const deletePost = (id) => {
    dispatch(deletePostRequest(id));
  };

  const renderDatePost = (datepost) => {
    const postDate = parseISO(datepost);
    const currentTime = new Date();

    if (differenceInHours(currentTime, postDate) < 24) {
      const distanceString = formatDistanceToNow(postDate, {
        addSuffix: true,
        locale: enUS,
      });

      return distanceString.replace(/^about\s/, "");
    } else {
      return format(postDate, "dd/MM/yyyy", { locale: enUS });
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.body.trim() && newComment.postId !== null) {
      const commentToSubmit = {
        ...newComment,
        avatar: user.avatar,
        name: user.name,
        body: newComment.body,
        like: 0,
        id: Math.floor(Math.random() * 10),
      };

      dispatch(addCommentRequest(commentToSubmit));
      setNewComment({ ...newComment, body: "", postId: null });
    }
  };
  const openDeleteModal = (commentId) => {
    setSelectedCommentId(commentId);
    setDeleteModalVisible(true);
  };

  const handleRemoveComment = () => {
    dispatch(deleteCommentRequest(selectedCommentId));
    setDeleteModalVisible(false);
    setSelectedCommentId(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        deleteModalRef.current &&
        !deleteModalRef.current.contains(event.target)
      ) {
        setDeleteModalVisible(false);
        setSelectedCommentId(null);
      }
    };

    const handleScroll = () => {
      setDeleteModalVisible(false);
      setSelectedCommentId(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCommentClick = (postId) => {
    setActivePostId((prevPostId) => (prevPostId === postId ? null : postId));
  };

  const [likeStatus, setLikeStatus] = useState(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: post.handlelike }), {})
  );

  const handleLikeClick = (postId) => {
    setLikeStatus((Status) => {
      const newLikeStatus = {
        ...Status,
        [postId]: !Status[postId],
      };

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

  const searchs = (posts) => {
    return posts.filter(
      (post) =>
        post.name.toLowerCase().includes(search?.toLowerCase()) ||
        post.body.toLowerCase().includes(search?.toLowerCase())
    );
  };

  const filteredPosts = searchs(posts);

  useEffect(() => {
    dispatch(setPosts());
    dispatch(setComments());
  }, [dispatch]);

  return (
    <div>
      <div className="post_top">
        <img src={user.avatar} />
        <input
          className="placeholder"
          type="text"
          placeholder="What's on you mind ?"
          onClick={() => setIsModalOpen(true)}
        ></input>
      </div>
      <hr />
      <hr />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => {
          return (
            <div key={post.id}>
              <div>
                <div className="friends_post">
                  <div className="friend_post_top">
                    <div className="Img_and_name">
                      <img className="Img" src={post.avatar} />
                      <div className="friends_name text-white">
                        <p className="friends_name text-white">{post.name}</p>
                        <p className="time text-white">
                          {renderDatePost(post.datepost)}
                          <i className="fa-solid fa-user-group"></i>
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => deletePost(post.id)}
                      className="menu bg-transparent "
                    >
                      <i className="fa-solid fa-x text-white"></i>
                    </button>
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
                        {likedPosts[post.id] ? post.likes + 1 : post.likes} like
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
                      {comments
                        .filter((comment) => comment.postId == post.id)
                        .map((comment) => (
                          <div className="row" key={comment.id}>
                            <div className="col-auto ms-3 mt-2">
                              <img
                                className="rounded-circle"
                                src={comment.avatar}
                                style={{ height: "38px", width: "40px" }}
                              ></img>
                            </div>
                            <div className="col-10 mt-2 bg-secondary rounded-4 d-flex position-relative">
                              <div className="p-2 w-100">
                                <div className="mb-1 text-capitalize fs-6 text-white ">
                                  {comment.name}
                                </div>
                                <div className="text-white ">
                                  {comment.body}
                                </div>
                              </div>
                              <button
                                className="p-2 flex-shrink-1 bg-transparent text-white"
                                onClick={() => openDeleteModal(comment.id)}
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                              </button>
                              {deleteModalVisible &&
                                selectedCommentId === comment.id && (
                                  <div className="modal-comment position-absolute">
                                    <div
                                      className="modal-content-comment"
                                      ref={deleteModalRef}
                                    >
                                      <div className="modal-button-comment  ">
                                        <button
                                          className="modal-button-comment-detele bg-transparent text-white d-flex flex-row mb-3"
                                          onClick={handleRemoveComment}
                                        >
                                          <div className="fa-solid fa-trash-can mt-3"></div>
                                          <div className="modal-button-detele">
                                            Detele
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div>
                            <div className="d-flex flex-row mb-3 comment_reply ">
                              <button className="bg-transparent p-2">
                                <HeartFilled
                                  onClick={() => handleLikeClick(comment.id)}
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
                        type="text"
                        placeholder="Add a comment..."
                        value={
                          newComment.postId === post.id ? newComment.body : ""
                        }
                        onChange={(e) =>
                          setNewComment({
                            ...newComment,
                            body: e.target.value,
                            postId: post.id,
                          })
                        }
                      />

                      <button
                        className="fa-solid fa-paper-plane bg-transparent text-white"
                        onClick={handleCommentSubmit}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-white error_post">Did not find the post</p>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create New Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
            <input
              type="file"
              placeholder="Image URL (optional)"
              value={newPost.img}
              onChange={(e) => setNewPost({ ...newPost, img: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={addPost}>Add Post</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Post;
