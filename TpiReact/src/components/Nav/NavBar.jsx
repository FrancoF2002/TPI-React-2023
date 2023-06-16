import React from "react";
import {useNavigate} from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate();
  const urlImgMovie = "https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png";

  const handlerChangeLogIn = async () => {
    try {
      navigate("/login");
    } catch (error) {
      error = "Error"
    }
  }

  const handlerChangeRegister = async () => {
    try {
      navigate("/register");
    } catch (error) {
      error = "Error"
    }
  }

  return (
    <div>
      <div className="">
        <div className="">
          <img src={"https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"} alt="" />
          <h3 className="">Bienvenidos a Data Movie</h3>
        </div>
        <div className="">
          <button onClick={handlerChangeLogIn} className="" color="success">
            Log In
          </button>
          <button onClick={handlerChangeRegister} className="" color="success">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
