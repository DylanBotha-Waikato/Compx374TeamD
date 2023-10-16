import React from "react";
import Logo from "../assets/combined.png";
import { Stack, Button } from "@mui/material";
import "../styles/Home.css";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <div className="home-div">
      <Stack direction="row" spacing={8} className="enterbuttons">
        <LoginButton buttonText={"Sign Up"} />
        <LoginButton buttonText={"Login"} />
      </Stack>

      <img src={Logo} className="applogo1" alt="logo" />

      <h1 className="blog">Blogs for Students</h1>

      <LoginButton className="getstarted" buttonText={"Get Started Now"} />
    </div>
  );
}

export default Home;
