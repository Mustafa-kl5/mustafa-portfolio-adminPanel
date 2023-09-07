import React from "react";
import "../UIStyle/LoginLayout.css";
export default function LoginLayout(props) {
  return <div className="main-layout-container">{props.children}</div>;
}
