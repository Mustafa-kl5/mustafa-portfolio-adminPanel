import React from "react";
import "../../componentsStyle/FeedBackCard.css";
import FeedBackDelete from "./FeedBackDelete";

export default function FeedBackCard({
  feedbackName,
  feedbackMessage,
  feedbackId,
  reload,
}) {
  return (
    <>
      <div className="feedback-card-header-section">
        <div className="feedback-content-name">{feedbackName}</div>
        <FeedBackDelete
          id={feedbackId}
          reload={() => {
            reload();
          }}
        />
      </div>
      <div className="feedback-card-content">{feedbackMessage}</div>
    </>
  );
}
