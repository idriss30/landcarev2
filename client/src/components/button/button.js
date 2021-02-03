import React from "react";
import "./button.scss";

const Button = ({ children, scss, onClick }) => {
  return (
    <button className={scss} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
