import React, { useState } from "react";
import "../UIStyle/MainLayout.css";
import Header from "../sharedComponents/Header";
import { createPortal } from "react-dom";
import Navigation from "../sharedComponents/Navigation";
export default function MainLayout(props) {
  const [show, setShow] = useState(false);
  const showModel = () => {
    setShow(!show);
  };

  return (
    <>
      {" "}
      <div className="main-layout">
        <Header onClick={showModel} />
        {createPortal(
          <Navigation show={show} onClick={showModel} />,
          document.getElementById("back-drop")
        )}
        <div className="content-holder">{props.children}</div>
      </div>
    </>
  );
}
