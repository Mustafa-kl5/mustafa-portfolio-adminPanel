import React, { useState } from "react";
import Form from "../../UI/Form";
import InputField from "../../sharedComponents/InputField";
import Button from "../../sharedComponents/Button";
import { notify, notifySuccess } from "../../Helper/Notify";
import { isValidFileType } from "../../ImageUtil/isValidFile";
import apiInstance from "../../Service/api";

export default function TechnologyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [technology, setTechnology] = useState({
    technologyName: "",
    proficiencyLevel: "",
    yearsOfExperience: "",
    technologyImage: "",
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!isValidFileType(file)) {
        notify(
          "You try to upload wrong Supported formate,Try one of these extensions:JPEG, PNG, GIF."
        );
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64String = event.target.result;
        setTechnology((prev) => ({
          ...prev,
          technologyImage: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await apiInstance.post(
        "/technology/addTechnology",
        technology
      );
      setIsLoading(false);
      setTechnology({
        technologyName: "",
        proficiencyLevel: "",
        yearsOfExperience: "",
        technologyImage: "",
      });
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Form formFunctionName="Add New Technology :" onSubmit={submitHandler}>
        <InputField
          label="Technology Name"
          onChange={(e) =>
            setTechnology((prev) => ({
              ...prev,
              technologyName: e.target.value,
            }))
          }
          value={technology.technologyName}
        />
        <InputField
          label="Proficiency Level"
          onChange={(e) =>
            setTechnology((prev) => ({
              ...prev,
              proficiencyLevel: e.target.value,
            }))
          }
          value={technology.proficiencyLevel}
        />
        <InputField
          label="Years Of Experience"
          onChange={(e) =>
            setTechnology((prev) => ({
              ...prev,
              yearsOfExperience: e.target.value,
            }))
          }
          value={technology.yearsOfExperience}
        />
        <InputField
          label="Technology Image"
          onChange={handleImageChange}
          type="file"
          value=""
        />
        <Button innerText="Add new Technology" isLoading={isLoading} />
      </Form>
    </>
  );
}
