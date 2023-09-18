import React, { useEffect, useRef, useState } from "react";
import Form from "../../UI/Form";
import InputField from "../../sharedComponents/InputField";
import TextAreaField from "../../sharedComponents/TextAreaField";
import Button from "../../sharedComponents/Button";
import { notify, notifySuccess } from "../../Helper/Notify";
import apiInstance from "../../Service/api";
export default function EditProjectsForm({
  projectName,
  projectDescription,
  projectLink,
  technologyUsed,
  projectGithubRepoLink,
  projectId,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const [project, setProject] = useState({
    projectName,
    projectDescription,
    projectLink,
    technologyUsed,
    projectGithubRepoLink,
    projectId,
  });
  useEffect(() => {
    setProject({
      projectName,
      projectDescription,
      projectLink,
      technologyUsed,
      projectGithubRepoLink,
      projectId,
    });
  }, [
    projectName,
    projectDescription,
    projectLink,
    technologyUsed,
    projectGithubRepoLink,
    projectId,
  ]);
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.post(
        `/project/updateProjectsById/:${projectId}`,
        project
      );
      setIsLoading(false);
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler} formFunctionName="Update Project :">
        <InputField
          label="Project Name"
          value={project.projectName}
          onChange={(e) =>
            setProject((prevData) => ({
              ...prevData,
              projectName: e.target.value,
            }))
          }
          type="text"
        />
        <TextAreaField
          label="Project Description"
          onChange={(e) =>
            setProject((prevData) => ({
              ...prevData,
              projectDescription: e.target.value,
            }))
          }
          type="text"
          value={project.projectDescription}
        />
        <InputField
          label=" Technology Used"
          onChange={(e) =>
            setProject((prevData) => ({
              ...prevData,
              technologyUsed: e.target.value,
            }))
          }
          type="text"
          hint="You must put a comma between each technology name"
          value={project.technologyUsed}
        />
        <InputField
          label="Project Link"
          onChange={(e) =>
            setProject((prevData) => ({
              ...prevData,
              projectLink: e.target.value,
            }))
          }
          type="text"
          value={project.projectLink}
          hint="You must write 'None' if the project not hosted yet."
        />
        <InputField
          label="Github Repo link"
          onChange={(e) =>
            setProject((prevData) => ({
              ...prevData,
              projectGithubRepoLink: e.target.value,
            }))
          }
          type="text"
          value={project.projectGithubRepoLink}
          hint="You must Write 'None' if the project not exist on Github."
        />
        <Button innerText="Save Change" isLoading={isLoading} />
      </Form>
    </>
  );
}
