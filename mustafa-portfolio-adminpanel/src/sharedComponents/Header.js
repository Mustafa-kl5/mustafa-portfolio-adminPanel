import React from "react";
import "../sharedComponentsStyle/Header.css";
import { logout } from "../components/auth/logout";
export default function Header(props) {
  return (
    <div className="header-holder">
      <div className="burger-button" onClick={props.onClick} />
      <div className="admin-word">
        <button
          type="button"
          className="logout-button"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        <div>Admin panel</div>
      </div>
    </div>
  );
}
