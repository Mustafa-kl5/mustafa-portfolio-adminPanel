import React, { useEffect, useState } from "react";
import LoginLayout from "../UI/LoginLayout";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/useAuth";

export default function Login() {
  const [showModel, setShowModel] = useState(true);
  const [auth, setAuth] = useState(useAuth());
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, [auth]);
  const showRegistration = () => {
    setShowModel(false);
  };
  const showLogin = () => {
    setShowModel(true);
  };

  return (
    <LoginLayout>
      {showModel ? (
        <LoginForm showRegistrationModel={showRegistration} />
      ) : (
        <RegistrationForm showLoginModel={showLogin} />
      )}
    </LoginLayout>
  );
}
