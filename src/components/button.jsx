import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button
      onClick={(e) => props.click && props.click(e.target.innerHTML)}
      className={`
        button
        ${props.operation ? "operation" : ""}
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}
        ${props.cancel ? "cancel" : ""}
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
