import { BookmarkIcon } from "../../../assets/icons/Icons";
import MovieSubInfo from "./MovieSubInfo";

const Movie = ({ movie }) => {
  return (
    <div className="movieCard  " >

      {/* onHover puede ir la descripcion con un backdrop negro */}
      <div className="movie__BookmarkContainer ">
        <BookmarkIcon />
      </div>

      <div className="flex flex-col justify-center items-center  ">
        <img
          className="rounded-lg w-full h-full  mb-[4px]  "
          src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie-image"
        />

        <MovieSubInfo movie={movie} />

        <p className="movieTitle   text-center">{movie.title}</p>
        {/* <p>{movie.overview}</p> */}
      </div>
    </div>
  );
};
export default Movie;
