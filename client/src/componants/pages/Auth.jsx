import "../styles/Auth.css";
import Login from "../auth/login";
import Register from "../auth/register";
import React, { useState } from "react";

const Auth = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const openLogin = () => {
    setIsRegisterActive(false);
  };

  const openRegister = () => {
    setIsRegisterActive(true);
  };

  return (
    <div
      className={`auth ${isRegisterActive ? "right-panel-active" : ""}`}
      id="auth"
    >
      <Login />

      <Register />

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep tracking your Tasks  
            </p>
            <button class="ghost" id="signIn" onClick={openLogin}>
              Login
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p> start your management journey by handlling your tasks</p>
            <button class="ghost" id="signUp" onClick={openRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
