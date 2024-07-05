import React from "react";
import "../assets/styles/noContent.css";

interface NoContentProps {
  text: string;
}

const NoContent: React.FC<NoContentProps> = ({ text }) => {
  return (
    <div className="no-content">
      <h2 className="no-content-title">{text}</h2>
    </div>
  );
};

export default NoContent;