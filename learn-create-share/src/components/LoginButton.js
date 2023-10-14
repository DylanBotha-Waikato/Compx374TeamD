import React, { useEffect, useState } from "react";

const LoginButton = () => {
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
      localStorage.setItem("token", token);
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
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginButton;
