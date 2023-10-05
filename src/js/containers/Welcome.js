import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Welcome = () => {
  const [isLoginView, setIsLogin] = useState(false);
  const user = useSelector(({ auth }) => auth.user);
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  const optInText = isLoginView
    ? ["Need an account?", "Register"]
    : ["Already have an account", "Login"];
  const [description, buttonText] = optInText;

  if (isChecking) {
    return <h1>Loading ...</h1>;
  }
  console.log({ user });
  if (user) {
    return <Navigate to="home" />;
  }

  return (
    <div className="centered-view">
      <div className="centered-container">
        {isLoginView ? <LoginForm /> : <RegisterForm />}
        <small className="form-text text-muted mt-2">
          {description}
          <span
            onClick={() => {
              setIsLogin((isLoginView) => !isLoginView);
            }}
            className="btn-link ml-2"
          >
            {buttonText}
          </span>
        </small>
      </div>
    </div>
  );
};

export { Welcome };
