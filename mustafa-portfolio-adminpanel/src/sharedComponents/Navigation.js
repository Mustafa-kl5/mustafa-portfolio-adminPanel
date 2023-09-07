import React from "react";
import "../sharedComponentsStyle/Navigation.css";

import NavigationLink from "./NavigationLink";
import { PrivateRoutes } from "../routes/privateRoute";

export default function Navigation(props) {
  const newRoutes = PrivateRoutes.filter((item) => {
    return !item.pathName.startsWith("/existProject");
  });
  return props.show ? (
    <div className="navigation-menu-holder-active">
      <div className="navigation-menu-links">
        <div className="menu-close">
          <div className="menu-word">Menu</div>
          <div className="close-button" onClick={props.onClick} />
        </div>
        {newRoutes.map((item) => {
          return (
            <NavigationLink
              key={item.pathName}
              pathName={item.pathName}
              innerText={item.pathName.slice(1)}
            />
          );
        })}
      </div>
    </div>
  ) : null;
}
