import React from "react";
import { Button } from "reactstrap";
import "./NavBar.css";
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
      <div className="navbar">
        <div className="divNavPresentacion">
          <img src={"https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"} alt="" />
          <h3 className="nombreDataMovie">Bienvenidos a Data Movie</h3>
        </div>
        <div className="buttonNav">
          <Button onClick={handlerChangeLogIn} className="buttonNav" color="success">
            Log In
          </Button>
          <Button onClick={handlerChangeRegister} className="buttonNav" color="success">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
