import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/organisms/Register/Register";
import { AuthProvider } from "./context/authContext";
import Landing from "./components/Landing/Landing";
import ProtectedRoute from "./routes/protectedRoute";

import Login from "./components/organisms/Login/Login";
import useApi from "./hooks/useApi";

function App() {
  const { getTopRatedMovies } = useApi();

  useEffect(() => {

    //Se ejecuta cada vez que se carga el componente. Trae peliculas mejor valoradas. Para traer otros datos es todo lo mismo, solo cambia el endpoint.
    getTopRatedMovies();
  }, []);

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
