import { BookmarkIcon } from "../../../assets/icons/Icons";
import MovieSubInfo from "./MovieSubInfo";
import { useNavigate} from "react-router-dom";
const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const showMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movieCard" onClick={() => showMovieDetail(movie.id)}>
      {/* onHover puede ir la descripcion con un backdrop negro */}
      <div className="movie__BookmarkContainer ">
        <BookmarkIcon />
      </div>

      <div className="flex flex-col justify-center items-center h-full shadow-darkBlueBG shadow-xl ">
        <img
          className="rounded-lg w-full h-full    "
          src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie-image"
        />

        {/* <MovieSubInfo movie={movie} /> */}

        {/* <p className="movieTitle text-center">{movie.title}</p> */}
        {/* <p>{movie.overview}</p> */}
      </div>
    </div>
  );
};
export default Movie;
