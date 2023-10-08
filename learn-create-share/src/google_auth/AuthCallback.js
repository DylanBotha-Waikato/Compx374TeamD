import { useEffect } from "react";
import jwt_decode from "jwt-decode"; // You'll need to install this library

const AuthCallback = () => {
  useEffect(() => {
    // Extract the JWT from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    console.log("Token from URL:", token);

    if (token) {
      // Decode the token to extract user IDs
      const decodedToken = jwt_decode(token);

      // Extract user IDs
      const userID = decodedToken.userID;
      const googleID = decodedToken.googleID;

      // Store the userrIDs securely (e.g., in localStorage)
      localStorage.setItem("userID", userID);
      localStorage.setItem("googleID", googleID);

      // Redirect the user to a dashboard or profile page
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <p>Handling the callback...</p>
      {/* You can display a loading message or spinner here */}
    </div>
  );
};

export default AuthCallback;
