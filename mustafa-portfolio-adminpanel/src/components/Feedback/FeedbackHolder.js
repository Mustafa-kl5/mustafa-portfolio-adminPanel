import React from "react";
import "../../componentsStyle/FeedbackHolder.css";
import FeedBackCard from "./FeedBackCard";
export default function FeedbackHolder() {
  return (
    <div className="feedback-holder">
      <FeedBackCard />
      <FeedBackCard />
    </div>
  );
}
