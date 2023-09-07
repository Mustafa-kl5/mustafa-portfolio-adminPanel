import React, { useState } from "react";
import Button from "../../sharedComponents/Button";
import { notify, notifySuccess } from "../../Helper/Notify";
import apiInstance from "../../Service/api";

export default function DeleteTechnology(props) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteTechnology = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.delete(
        `/technology/deleteTechnology/:${props.technologyId}`
      );
      notifySuccess(response.data.message);
      setIsLoading(false);
      props.reload();
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <Button
      innerText="Delete Technology"
      delete={true}
      onClick={handleDeleteTechnology}
    />
  );
}
