import React from "react";
import "../sharedComponentsStyle/LoadingProgress.css";

export default function LoadingProgress() {
  return (
    <div className="loading-progress-holder">
      <span className="loader-progress"></span>
    </div>
  );
}
