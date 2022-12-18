import { useEffect, useState } from "react";
import { api } from "../api";
import Comment from "../components/Comment";

import "./Comments.css";

export default function Comments() {
  const [comment, setComment] = useState({
    name: "",
    text: "",
  });

  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const { data } = await api.get("/comments");
    setComments(data);
  };

  const createComment = async () => {
    if (!comment.name || !comment.text) {
      alert("Fill all the fields");
      return;
    }
    const { data } = await api.post("/comments", comment);
    setComments([...comments, data]);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div
      style={{ minHeight: 600, paddingTop: 64, paddingBottom: 64 }}
      className="container"
    >
      {comments.map((c) => (
        <Comment comment={c} />
      ))}
      <div>
        <div>
          <input
            placeholder="Name"
            className="comment-input"
            value={comment.name}
            onChange={(e) =>
              setComment({
                ...comment,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <textarea
            placeholder="Add your comments"
            className="comment-text-input"
            value={comment.text}
            onChange={(e) =>
              setComment({
                ...comment,
                text: e.target.value,
              })
            }
            style={{
              padding: 4,
              fontSize: 16,
            }}
            rows={3}
          ></textarea>
        </div>
        <div>
          <button
            style={{ cursor: "pointer" }}
            className="button"
            onClick={createComment}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
