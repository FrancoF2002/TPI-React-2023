import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/templates/Home/Home";
import Login from "./components/organisms/Login/Login";
import Register from "./components/organisms/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
