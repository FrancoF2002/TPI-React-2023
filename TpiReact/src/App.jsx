import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/organisms/Login/Login";
import Register from "./components/organisms/Register/Register";
import { AuthProvider } from "./context/authContext";
import Landing from "./components/Landing/Landing";
import ProtectedRoute from "./routes/protectedRoute";
import { useEffect } from "react";

//fd4425f7





function App() {


  
  

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab649abab4msh81a50b49a87061ep15a325jsna1d2e64d0cfa',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  

  useEffect(() => {
    
     fetch(url, options)
     .then(res =>res.json())
     .then(res => console.log(res))
     .catch(err => console.log(err))

  }, [])
  
  
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
