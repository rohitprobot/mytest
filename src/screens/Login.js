

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Login page</div>
      <br/>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Click here to go to Home page
      </button>
    </div>
  );
};

export default Login;
