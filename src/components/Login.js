import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";

function Login() {
  const navigate = useNavigate();

  return (
    <div id="animeLeft">
      <Head title="Login" description='Login description' />
      <h1>Login</h1>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );
}

export default Login;
