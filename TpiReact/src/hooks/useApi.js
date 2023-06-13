import { useEffect, useState } from "react";

 const useApi = () => {

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
  }, []);

  return fetchMovies();

}

export default useApi;


 //https://api.themoviedb.org/3/movie/upcoming

TODO: "Video de youtube"

// import axios from 'axios'
// const apiKey = import.meta.env.VITE_API_MOVIES_TOKEN;

// const getTopRatedMovies = async () => {

//   const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
//   console.log(response)
// }

// export {
//   getTopRatedMovies
// 