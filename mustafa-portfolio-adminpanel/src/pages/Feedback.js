import React, { useState } from "react";
import MainLayout from "../UI/MainLayout";
import FeedbackHolder from "../components/Feedback/FeedbackHolder";
import useGet from "../hooks/useGet";
import LoadingProgress from "../sharedComponents/LoadingProgress";

export default function Feedback() {
  const [reload, setReload] = useState(false);
  const { data, isLoading } = useGet("/feedBack/getFeedBack", reload);

  return (
    <MainLayout>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <FeedbackHolder
          feedBackList={data}
          reload={() => {
            setReload(!reload);
          }}
        />
      )}
    </MainLayout>
  );
}
