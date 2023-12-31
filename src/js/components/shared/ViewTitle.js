import React from "react";
import { Link } from "react-router-dom";

const ViewTitle = ({ title }) => {
  return (
    <div className="chat-name-container">
      <span className="name">{title}</span>
      <Link to="/" className="btn btn-primary btn-sm back-button">
        Back
      </Link>
    </div>
  );
};

export { ViewTitle };
