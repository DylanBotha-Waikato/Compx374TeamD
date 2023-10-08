// React Component for Login Button
import React from "react";
import { useEffect } from "react";

const LoginButton = () => {
  const handleGoogleLogin = () => {
    // Redirect to the server-side Google authentication route
    window.location.href = "http://localhost:3000/auth/google";
  };

  function getJWTFromResponse() {
    //return response.data.token;
  }

  // After the user is redirected back to your application from the server callback
  // (e.g., /auth/google/callback), you can extract the JWT from the response
  useEffect(() => {
    const token = getJWTFromResponse(); // Implement this function to retrieve the token from the response

    if (token) {
      // Store the token securely (e.g., in localStorage)
      localStorage.setItem("token", token);
    }
  }, []);

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default LoginButton;
