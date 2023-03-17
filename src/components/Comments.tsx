import "../assets/styles/comments.css";
import useComments from "../hooks/useComments";
import NoContent from "./NoContent";
const Comments = ({ gameId, sessionUser }) => {
  const { addComent, comments } = useComments(gameId);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const comment = formData.get("comment").trim();
    const user = sessionUser.name;
    await addComent({
      gameId,
      text: comment,
      author: user,
      date: new Date().toISOString()
    });
  };
  return (
    <div>
      <h1 className="comments-title">Comments</h1>
      <div className="comments-container">
        {sessionUser
          ? (
            <form className="comments-input" onSubmit={onSubmit}>
              <label className="comment-label" htmlFor="comment-content">
              Leave us a comment
              </label>
              <textarea
                className="comment-content"
                name="comment"
                id="comment-content"
                cols="70"
                rows="10"
              ></textarea>
              <button className="comment-button" type="submit">
              Submit
              </button>
            </form>
          )
          : (
            <></>
          )}
      </div>
      <div className="comments-list">
        {comments.map((comment) => {
          return (
            <>
              <div key={comment.id} className="comment">
                <h3 className="post-comment-name">{comment.author}</h3>
                <p className="post-comment-content">{comment.text}</p>
              </div>
            </>
          );
        })}
        {comments.length === 0
          ? (
            <NoContent text="Be the first comment in this post! 🎉" />
          )
          : null}
      </div>
    </div>
  );
};

export default Comments;
