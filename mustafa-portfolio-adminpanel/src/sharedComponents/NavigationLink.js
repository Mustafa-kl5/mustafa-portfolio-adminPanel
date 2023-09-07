import React from "react";
import { Link } from "react-router-dom";
import "../sharedComponentsStyle/NavigationLink.css";

export default function NavigationLink(props) {
  return (
    <div className="navigation-link-holder">
      <Link to={props.pathName} className="navigation-link">
        {props.innerText}
      </Link>
    </div>
  );
}
