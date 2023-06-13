import React from "react";
import { useState, useEffect } from "react";
// import { getUpcoming } from "../../../services/getUpcoming";
const CardMovie = () => {
  // const [upcomingMovies, setUpcomingMovies] = useState([]);

  // useEffect(() => {
  //   getUpcoming().then((newUpcoming) => setUpcomingMovies(newUpcoming));
  // }, []);

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

  useEffect(() => {
    fetchMovies();
    //console.log(movies)
  }, []);
  return (
    <div className="">
      {movies.map((movie, index) => {
        if (movie.primaryImage) {
          return (
            <div key={index} className="bg-slate-500 m-1">
              <div key={index} className="">
                <p>{movie.titleText.text}</p>
                <p>{movie.releaseDate.year}</p>
                <p>Descripcion</p>
                <img src={movie.primaryImage?.url} alt="movie-image" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CardMovie;
