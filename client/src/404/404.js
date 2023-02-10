import React from "react";
import "./404.scss";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error__section">
      <div className="error__section__title">
        <h1>Nothing to see Here.</h1>
        <p>
          Please consider visiting the <Link to="/">Home</Link> Page
        </p>
      </div>

      <div>
        <div className="error__section-svg"></div>
      </div>
    </div>
  );
}

export default ErrorPage;
