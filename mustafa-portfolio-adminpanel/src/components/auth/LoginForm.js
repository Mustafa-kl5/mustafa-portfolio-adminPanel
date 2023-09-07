import React, { useState } from "react";
import InputField from "../../sharedComponents/InputField";
import "../../componentsStyle/LoginForm.css";
import Button from "../../sharedComponents/Button";
import { useNavigate } from "react-router-dom";

import "animate.css";
import { setToken } from "./setToken";
import { setAuthToken } from "./setAuth";
import { notify } from "../../Helper/Notify";
import apiInstance from "../../Service/api";
export default function LoginForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const emailHandler = (event) => {
    setCredentials((prev) => ({ ...prev, email: event.target.value }));
  };
  const passwordHandler = (event) => {
    setCredentials((prev) => ({ ...prev, password: event.target.value }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await apiInstance.post("auth/", credentials);
      setIsLoading(false);
      setToken(response.data.token);
      setAuthToken();
      navigate("/home");
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  const showRegistration = () => {
    props.showRegistrationModel();
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="login-form-holder animate__animated animate__fadeIn"
      >
        <div className="login-word">Sign In</div>
        <InputField label="Email" onChange={emailHandler} type="email" />
        <InputField
          label="Password"
          onChange={passwordHandler}
          type="password"
        />
        <Button innerText="Sign In" type="submit" isLoading={isLoading} />
        <div className="navigation-word" onClick={showRegistration}>
          Sign Up
        </div>
      </form>
    </>
  );
}
