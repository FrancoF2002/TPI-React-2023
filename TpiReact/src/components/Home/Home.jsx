import { Nav, NavItem, NavLink } from "reactstrap";
import { useAuth } from "../../context/authContext";
import "../NavBar/NavBarHome.css";
import "./Home.css";
import { useState, useEffect } from "react";
import CardMovie from "./CardsMovie/CardMovie";

const Home = () => {
  const { user, logOut, loading } = useAuth();
  const [movies, setMovies] = useState([]);

  const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ab649abab4msh81a50b49a87061ep15a325jsna1d2e64d0cfa",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const fetchMovies = async () => {
    TODO: "Anda bien";
    // fetch(url, options)
    // .then((res) => res.json())
    // .then((res) => { movies = res
    //                 console.log(res)})

    TODO: "2da opcion y anda";
    const res = await fetch(url, options);
    const datos = await res.json();
    setMovies(datos.results);
    console.log(datos.results);
    return datos;
  };

  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <h1> Loading...</h1>;

  useEffect(() => {
    fetchMovies();
    //console.log(movies)
  }, []);

  return (
    <div className="container">
      <div className="divNav">
        <Nav card fill justified className="NavBarHome">
          <NavItem>
            <NavLink active href="#" className="navLinkHomeCss">
              Series
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="navLinkHomeCss">
              Peliculas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#" className="navLinkHomeCss">
              Ver mas tarde
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#" className="navLinkHomeCss">
              Favoritos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#" className="navLinkHomeCss">
              <button onClick={handleLogOut}>Log out</button>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      
      <div>
        <h1 className=" mx-auto text-4xl ">
          Welcome {user.displayName} {user.email}
        </h1>
      </div>

      <div>
        <div className="PeliculasCompleto">
          <h3>Peliculas</h3>
          <div className="Peliculas">
          <CardMovie/>
          </div>
        </div>

        <div className="SeriesCompleto">
          <h3>Series</h3>
          <div className="Series">
            <img src="" alt="" />
            <p>Nombre Serie</p>
            <p>Fecha</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
