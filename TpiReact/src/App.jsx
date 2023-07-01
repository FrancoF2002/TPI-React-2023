import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/shared/Register/Register";
import { AuthProvider } from "./context/authContext";
import Landing from "./components/Landing/Landing";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./components/shared/Login/Login";
import Series from "./components/Home/Series/Series";
import MovieDescription from "./components/Home/Movies/MovieDescription";
import Nav from "./components/Nav/Nav";
import Movies from "./components/Home/Movies/Movies";
import SerieDescription from "./components/Home/Series/SerieDescription";
import Saved from "./components/Home/Saved/Saved";
import NotFound from "./components/shared/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
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
          <Route
            path="/series"
            element={
              <ProtectedRoute>
                <Series />
              </ProtectedRoute>
            }
          />
          <Route
            path="serie/:id"
            element={
              <ProtectedRoute>
                <SerieDescription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="movie/:id"
            element={
              <ProtectedRoute>
                <MovieDescription />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved"
            element={
              <ProtectedRoute>
                <Saved />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
