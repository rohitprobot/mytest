import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Home</div>
      <br/>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Click here to go to login page
      </button>

      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Click here to go to Contact page
      </button>
    </div>
  );
};

export default Home;
