import React from "react";
import "./Styles/Button.css";
const Button = (props) => {
  return (
    <div>
      <button className={`btn ${props.className}`}>{props.text}</button>
    </div>
  );
};

export default Button;
