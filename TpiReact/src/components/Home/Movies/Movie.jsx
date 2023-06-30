import { BookmarkIcon } from "../../../assets/icons/Icons";
import MovieSubInfo from "./MovieSubInfo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { db } from "../../../firebase/firebase";

import {
  collection,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const { user, logOut, loading } = useAuth();

  const showMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleSaveFilm = (film) => {
    saveMovie({
      movieId: film.id,
      movieImg: film.poster_path,
      movieTitle: film.title,
    });
  };

  
  async function saveMovie(film) {
    try {
      const savedRef = doc(db, "users", user.uid);
      await updateDoc(savedRef, {
        arrayFilms: arrayUnion(film),
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }                                                                     

  /*
  async function saveMovie(film) {
    console.log(user);
    try {
      const usersRef = collection(db, "saved");
      await setDoc(doc(usersRef, user.uid), film);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    */

  return (
    <div className="movieCard">
      <div className="relative">
        {/* onHover puede ir la descripcion con un backdrop negro */}
        <div
          className="movie__BookmarkContainer "
          onClick={() => handleSaveFilm(movie)}
        >
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
    </div>
  );
};
export default Movie;
