import React from "react";
import "../../componentsStyle/FeedbackHolder.css";
import FeedBackCard from "./FeedBackCard";
import NoDataFound from "../../sharedComponents/NoDataFound";
export default function FeedbackHolder({ feedBackList, reload }) {
  const reloadData = () => {
    reload();
  };
  return (
    <div className="feedback-holder">
      {feedBackList.feedbacks.length === 0 ? (
        <NoDataFound />
      ) : (
        feedBackList.feedbacks.map((feedback, index) => {
          return (
            <FeedBackCard
              reload={reloadData}
              key={index}
              feedbackName={feedback.name}
              feedbackMessage={feedback.feedBackMessage}
              feedbackId={feedback._id}
            />
          );
        })
      )}
    </div>
  );
}
