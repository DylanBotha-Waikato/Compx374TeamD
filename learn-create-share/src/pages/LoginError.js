import React from "react";
import "../styles/LoginError.css";
import LoginButton from "../components/LoginButton";

function LoginError() {
  return (
    <div>
      <div className="page">
        <div className="centered">
          <h1>Login Error</h1>
          <h3>
            Invalid email address domain. Please contact the site administrator
            regarding gaining access.
          </h3>
          <h3>Try again below:</h3>
          <div className="buttons">
            <LoginButton buttonText={"Log in with Google"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginError;
