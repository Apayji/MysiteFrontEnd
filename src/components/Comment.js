import moment from "moment";
import "./Comment.css";

export default function Comment({ comment }) {
  return (
    <div className="comment" style={{ marginBottom: 24 }}>
      <h2 className="comment-name">{comment.name}</h2>
      <div className="comment-text">{comment.text}</div>
      <div className="comment-date">
        <i>{moment(comment.createdAt).format("YYYY/MM/DD HH:mm")}</i>
      </div>
    </div>
  );
}
