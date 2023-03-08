import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div >
      Contact
      <br/>
      <br/>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Click here to go to login page
      </button>
    </div>
  );
};

export default Contact;
