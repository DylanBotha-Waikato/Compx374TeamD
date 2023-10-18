import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Cookies from "js-cookie";

const LoginButton = ({ buttonText, className }) => {
  const handleGoogleLogin = () => {
    // Redirect to the server-side Google authentication route
    window.location.href = "http://localhost:3000/auth/google";
  };

  // State to store the JWT
  const [jwtToken, setJwtToken] = useState(null);

  // Function to extract and store the JWT
  function getJWTFromResponse() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      console.log("Received token:", token);
      // Store the token securely (e.g., in localStorage)
      Cookies.set("token", token);
      setJwtToken(token);
    }
  }

  // Effect to extract and store the JWT when the component mounts
  useEffect(() => {
    getJWTFromResponse();
  }, []);

  // Render the button and display the token if available
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleGoogleLogin}
        className={className}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default LoginButton;
