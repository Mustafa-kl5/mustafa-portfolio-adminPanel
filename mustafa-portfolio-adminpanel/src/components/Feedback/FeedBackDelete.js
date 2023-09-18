import React, { useState } from "react";
import "../../componentsStyle/FeedBackDelete.css";
import apiInstance from "../../Service/api";
import LoadingProgress from "../../sharedComponents/LoadingProgress";
import { notify, notifySuccess } from "../../Helper/Notify";
export default function FeedBackDelete({ id, reload }) {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.delete(
        `/feedBack/deleteFeedBack/:${id}`
      );
      setIsLoading(false);
      notifySuccess(response.data.message);

      reload();
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="feedback-delete" onClick={onSubmitHandler} />
      {isLoading && <LoadingProgress />}
    </>
  );
}
