import React, { useState } from "react";
import "../../componentsStyle/DeleteProject.css";
import Button from "../../sharedComponents/Button";
import apiInstance from "../../Service/api";
import { useNavigate } from "react-router-dom";
import { notify, notifySuccess } from "../../Helper/Notify";

export default function DeleteProject(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.delete(
        `/project/deleteProjectsById/:${props.projectId}`
      );
      notifySuccess(response.data.message);
      setIsLoading(false);
      navigate("/projects");
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="delete-button-holder">
      <Button
        innerText="Delete Project"
        delete={true}
        onClick={deleteHandler}
      />
    </div>
  );
}
