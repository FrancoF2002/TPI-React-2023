import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/templates/Home/Home";
import Login from "./components/organisms/Login/Login";
import Register from "./components/organisms/Register/Register";
import { AuthProvider } from "./context/authContext";
import Landing from "./components/templates/Landing/Landing";
import ProtectedRoute from "./routes/protectedRoute";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
