import React, { useState } from "react";
import InputField from "../../sharedComponents/InputField";
import "../../componentsStyle/LoginForm.css";
import Button from "../../sharedComponents/Button";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { notify } from "../../Helper/Notify";
import { setToken } from "./setToken";
import apiInstance from "../../Service/api";
import { setAuthToken } from "./setAuth";

export default function RegistrationForm(props) {
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
      const response = await apiInstance.post("auth/registration", credentials);
      setIsLoading(false);
      setToken(response.data.token);
      setAuthToken();
      navigate("/home");
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  const showLogin = () => {
    props.showLoginModel();
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="login-form-holder animate__animated animate__fadeIn"
      >
        <div className="login-word">Sign Up</div>
        <InputField label="Email" onChange={emailHandler} type="email" />
        <InputField
          label="Password"
          onChange={passwordHandler}
          type="password"
        />
        <Button innerText="Sign up" type="submit" isLoading={isLoading} />
        <div className="navigation-word" onClick={showLogin}>
          Sign In
        </div>
      </form>
    </>
  );
}
