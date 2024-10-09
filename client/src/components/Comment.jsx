import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../store/comment/commentSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector(({ comment }) => comment.comments);
  const errorMsg = useSelector(({ comment }) => comment.error);

  useEffect(() => {
    dispatch(setComments(id));
  }, []);

  return (
    <div className="mb-3">
      {comments.map(({ comment }) => (
        <div className="row" key={comment.id}>
          <div className="col-auto ms-3 mt-2 ">
            <img className="img rounded-circle" src={comment.avatar}></img>
          </div>
          <div className="col-10 mt-2 ">
            <div className="mb-1 text-capitalize nameComment_color">
              {comment.name}
            </div>
            <div>{comment.body}</div>
            <button className="bg-white text-dark  mb-2 btn btn-transparent fs-6 reply_color">
              Reply to
            </button>
          </div>
        </div>
      ))}

      {errorMsg && <div className="text-danger">{errorMsg}</div>}
    </div>
  );
};

export default Comment;
