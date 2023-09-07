import React, { useState } from "react";
import InputField from "../sharedComponents/InputField";
import Button from "../sharedComponents/Button";
import TextAreaField from "../sharedComponents/TextAreaField";
import Form from "../UI/Form";
import apiInstance from "../Service/api";
import { notify, notifySuccess } from "../Helper/Notify";

export default function HomeDataForm(props) {
  const [homeData, SetHomeData] = useState({
    name: props.name,
    description: props.description,
    cvLink: props.cvLink,
    githubUrl: props.githubUrl,
  });

  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await apiInstance.post("/home/updateHome", homeData);
      setIsLoading(false);
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <Form onSubmit={onSubmitHandler} formFunctionName="Upload New Data :">
      <InputField
        label="Name"
        onChange={(e) =>
          SetHomeData((prevData) => ({
            ...prevData,
            name: e.target.value,
          }))
        }
        value={homeData.name}
      />
      <TextAreaField
        label="Description"
        onChange={(e) =>
          SetHomeData((prevData) => ({
            ...prevData,
            description: e.target.value,
          }))
        }
        value={homeData.description}
      />
      <InputField
        label="GitHub URL"
        onChange={(e) =>
          SetHomeData((prevData) => ({
            ...prevData,
            githubUrl: e.target.value,
          }))
        }
        value={homeData.githubUrl}
      />
      <InputField
        label="Cv Link"
        onChange={(e) =>
          SetHomeData((prevData) => ({
            ...prevData,
            cvLink: e.target.value,
          }))
        }
        value={homeData.cvLink}
      />
      <Button innerText="Save Change" type="submit" isLoading={isLoading} />
    </Form>
  );
}
