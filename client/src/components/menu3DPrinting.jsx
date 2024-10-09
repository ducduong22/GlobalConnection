import { useSelector, useDispatch } from "react-redux";
import { HeartFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Prin, setPrinting } from "../store/menu/ThreeDPrintingSlice";
const ThreeDPrinting = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const prin = useSelector(Prin);
  console.log("2", prin);
  const [likeStatus, setLikeStatus] = useState(
    prin.reduce((acc, tech) => ({ ...acc, [tech.id]: tech.handlelike }), {})
  );
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
  };
  const searchs = (prin) => {
    return prin.filter(
      (tech) =>
        tech.name.toLowerCase().includes(search.toLowerCase()) ||
        tech.body.toLowerCase().includes(search.toLowerCase())
    );
  };
  console.log("A", searchs);
  const filtered = searchs(prin);
  useEffect(() => {
    dispatch(setPrinting());
  }, [dispatch]);

  return (
    <div>
      {filtered.length > 0 ? (
        filtered.map((tech) => {
          return (
            <div key={tech.id}>
              <div className="">
                <div className="friends_post">
                  <div className="friend_post_top">
                    <div className="Img_and_name">
                      <img className="Img" src={tech.avatar} />
                      <div className="friends_name text-white">
                        <p className="friends_name text-white">{tech.name}</p>
                        <p className="time text-white">
                          {tech.datepost}
                          <i className="fa-solid fa-user-group"></i>
                        </p>
                      </div>
                    </div>

                    <div className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                  <div>
                    <div className="text-capitalize text-white mt-4 mb-2">
                      {tech.body}
                    </div>
                  </div>
                  {tech.img && <img src={tech.img} />}

                  <div className="info">
                    <div className="emoji_img">
                      <p className="text-white ">{tech.likes}</p>
                    </div>

                    <div className="comment">
                      <p className="text-white">{tech.comment} </p>
                      <i className="fa-solid fa-comment fs-5 text-white"></i>
                      <p className="text-white">{tech.share}</p>
                      <i className="fa-solid fa-share-from-square fs-5 text-white"></i>
                    </div>
                  </div>

                  <hr />
                  {/*---------------------------------------------------------------------------*/}

                  <div className="like">
                    <div className="like_icon">
                      <button className="bg-transparent">
                        <HeartFilled
                          onClick={() => handleLikeClick(tech.id)}
                          style={{
                            color: likeStatus[tech.id] ? "red" : "white",
                            fontSize: "24px",
                          }}
                        />
                      </button>
                    </div>

                    <div className="like_icon">
                      <i className="fa-solid fa-message text-white"></i>
                      <button className="bg-transparent text-white">
                        Comments
                      </button>
                    </div>

                    <div className="like_icon">
                      <i className="fa-solid fa-share text-white"></i>
                      <p className="text-white">Share</p>
                    </div>
                  </div>
                  <hr />

                  <hr />
                  {/*---------------------------------------------------------------------------*/}
                  <div className="comment_warpper">
                    <img src="image/profile.png" />
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
          );
        })
      ) : (
        <p>Did not find the post</p>
      )}
    </div>
  );
};

export default ThreeDPrinting;
