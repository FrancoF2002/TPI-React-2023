import React from "react";
import { useApi } from '../../../hooks/useApi'
import Movie from "./Movie";
import Loader from "../../shared/Loader/Loader";

const Movies = () => {
    
   const {
     loading,
     data:movies,
     error,
   } = useApi(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`);

  if (!movies || loading) {
    return <Loader />;
  }

  return (
    <div className="moviesCardsContainer">
      {movies.results.map((movie, index) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Movies;
