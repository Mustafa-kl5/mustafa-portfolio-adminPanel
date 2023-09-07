import React from "react";
import "../sharedComponentsStyle/Button.css";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`button-style ${props.delete ? "delete" : ""}`}
      onClick={props.onClick}
    >
      {props.innerText}
      {props.isLoading ? <span className="loader"></span> : ""}
    </button>
  );
}
