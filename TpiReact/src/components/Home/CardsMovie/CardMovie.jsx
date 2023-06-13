import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const CardMovie = () => {
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
    const res = await fetch(url, options);
    const datos = await res.json();
    setMovies(datos.results);
    console.log(datos.results);
    return datos;
  };

  useEffect(() => {
    fetchMovies();
    //console.log(movies)
  }, []);

  return (
    <div className="card-New">
      {movies.map((m, index) => {
        return (
          <div className="card-New">
          <div key={index} className="cardMovie">
            <p>{m.titleText.text}</p>
            <p>{m.releaseDate.year}</p>
            <p>Descripcion</p>
            <img src={"m.primaryImage.url"} alt="" />
            </div>
          </div>
        );
      })}
     
      
    </div>
  );
};

export default CardMovie;
