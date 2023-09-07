import React from "react";
import "../../componentsStyle/FeedBackCard.css";
import FeedBackDelete from "./FeedBackDelete";

export default function FeedBackCard() {
  return (
    <>
      <div className="feedback-card-header-section">
        <div className="feedback-content-name">Ahmad</div>
        <FeedBackDelete />
      </div>
      <div className="feedback-card-content">
        The code you've provided seems to be written in JavaScript and involves
        the use of the filter function to remove certain items from an array of
        route objects. It looks like this code is meant to remove routes with
        specific pathName values ("/" and "/existProject") from the routes
        array. Here's a breakdown of what the code does: It takes an array
        called routes which presumably contains objects representing different
        routes. The .filter() function is used on the routes array. This
        function creates a new array containing only the elements that pass a
        certain condition specified by the provided callback function. Inside
        the filter function: 3. For each item (route) in the routes array, the
        callback function is executed. The condition in the callback function
        checks if the pathName of the current route is not equal to "/" and not
        equal to "/existProject". If the condition is true (meaning the pathName
        is neither "/" nor "/existProject"), the item is included in the new
        array. If the condition is false (meaning the pathName is either "/" or
        "/existProject"), the item is excluded from the new array. So, when the
        filter function completes, the newRoutes array will contain all the
        route objects from the original routes array except those with pathName
        values of "/" and "/existProject". Keep in mind that this code doesn't
        modify the original routes array; it creates a new array (newRoutes)
        with the filtered results. If you want to update the routes array
        itself, you can reassign the newRoutes array back to the routes
        variable:
      </div>
    </>
  );
}
