import React, { useEffect, useState } from "react";
import MainLayout from "../UI/MainLayout";
import Form from "../UI/Form";
import InputField from "../sharedComponents/InputField";
import TextAreaField from "../sharedComponents/TextAreaField";
import Button from "../sharedComponents/Button";
import useGet from "../hooks/useGet";
import { notify, notifySuccess } from "../Helper/Notify";
import apiInstance from "../Service/api";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGet("/contact/getContact");
  const [contact, setContact] = useState({
    email: "",
    phoneNumber: "",
    contactMessage: "",
  });

  useEffect(() => {
    if (data && data.userContact) {
      setContact({
        email: data.userContact.email,
        phoneNumber: data.userContact.phoneNumber,
        contactMessage: data.userContact.contactMessage,
      });
    }
  }, [data]);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await apiInstance.post(
        "/contact/updateContact",
        contact
      );
      setLoading(false);
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Form formFunctionName="Contact Information :" onSubmit={submitHandler}>
        <InputField
          label="Email"
          value={contact.email}
          onChange={(e) =>
            setContact((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputField
          label="Phone Number"
          value={contact.phoneNumber}
          onChange={(e) =>
            setContact((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        <TextAreaField
          label="Contact Message"
          value={contact.contactMessage}
          onChange={(e) =>
            setContact((prev) => ({ ...prev, contactMessage: e.target.value }))
          }
        />
        <Button innerText="Save Change" isLoading={loading} />
      </Form>
    </MainLayout>
  );
}
