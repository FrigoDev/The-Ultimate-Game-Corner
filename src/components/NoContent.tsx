import "../assets/styles/noContent.css";
const NoContent = ({ text }) => {
  return (
    <div className="no-content">
      <h2 className="no-content-title">{text}</h2>
    </div>
  );
};
export default NoContent;
