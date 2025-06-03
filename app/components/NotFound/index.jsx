import React from "react";
import { Link } from "react-router-dom";
import "./notFoundStyle.css";

const NotFound = () => {
  return (
    <div className="fourOfour">
      <div className="notfound-card">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-message">Oops! The page you are looking for does not exist.</p>
        <Link className="notfound-home-btn" to="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
