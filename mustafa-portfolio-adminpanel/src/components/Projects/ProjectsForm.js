import React, { useRef, useState } from "react";
import Form from "../../UI/Form";
import InputField from "../../sharedComponents/InputField";
import TextAreaField from "../../sharedComponents/TextAreaField";
import ImageUploader from "../../sharedComponents/ImageUploder";
import ImagePreview from "../../sharedComponents/ImagePreview";
import Button from "../../sharedComponents/Button";
import ProjectList from "./ProjectList";
import apiInstance from "../../Service/api";
import { notify, notifySuccess } from "../../Helper/Notify";
export default function ProjectsForm(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    projectLink: "",
    projectTechnology: "",
    projectImages: [],
  });

  const childRef = useRef(null);

  const imageReceiver = (images) => {
    setProject((prev) => ({
      ...prev,
      projectImages: images,
    }));
  };

  const imageDeleteHandler = (currentIndex) => {
    childRef.current.deleteImage(currentIndex);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (project.projectImages.length === 0) {
      notify("At least you must add one photo.");
      return;
    }
    try {
      setIsLoading(true);
      const response = await apiInstance.post("/project/addProject", project);
      setIsLoading(false);
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
    props.reload();
  };
  return (
    <>
      <Form onSubmit={submitHandler} formFunctionName="Add New Project :">
        <InputField
          label="Project Name"
          onChange={(e) => {
            setProject((prev) => ({
              ...prev,
              projectName: e.target.value,
            }));
          }}
          type="text"
        />
        <TextAreaField
          label="Project Description"
          onChange={(e) => {
            setProject((prev) => ({
              ...prev,
              projectDescription: e.target.value,
            }));
          }}
          type="text"
        />
        <InputField
          label="Project Link"
          onChange={(e) => {
            setProject((prev) => ({
              ...prev,
              projectLink: e.target.value,
            }));
          }}
          type="text"
        />
        <InputField
          label=" Technology Used"
          onChange={(e) => {
            setProject((prev) => ({
              ...prev,
              projectTechnology: e.target.value,
            }));
          }}
          type="text"
          hint="You must put a comma between each technology name"
        />
        <Button innerText="Add New Project" isLoading={isLoading} />
      </Form>
      <ImagePreview
        images={project.projectImages}
        handelDeleteImage={imageDeleteHandler}
      />
      <ImageUploader sendImages={imageReceiver} ref={childRef} images={[]} />
    </>
  );
}
