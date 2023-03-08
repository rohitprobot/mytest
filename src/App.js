import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
