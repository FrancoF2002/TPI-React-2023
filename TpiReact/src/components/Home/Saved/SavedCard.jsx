import { BookmarkIconFilled } from "../../../assets/icons/Icons";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../context/authContext";

import { useEffect, useState } from "react";
const SavedCard = ({ film }) => {
  const { user, logOut, loading } = useAuth();
  const [isRemoved, setIsRemoved] = useState(false);
  const handleRemoveFilm = () => {
    removeFilm({
      movieId: film.id,
      movieImg: film.poster_path,
      movieTitle: film.title,
    });
  };

  async function removeFilm(filmToRemove) {
    try {
      setIsRemoved(true);

      const savedRef = doc(db, "users", user.uid);
      await updateDoc(savedRef, {
        arrayFilms: arrayRemove(film),
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }
  useEffect(() => {}, []);

  return (
    <div
      className={`movieCard ${isRemoved ? "hidden" : ""}`}
      // onClick={() => showMovieDetail(movie.id)}
    >
      <div className="relative">
        {/* onHover puede ir la descripcion con un backdrop negro */}
        <div
          className="movie__BookmarkContainer fill-white hover:fill-none"
          onClick={() => handleRemoveFilm(film)}
        >
          <BookmarkIconFilled />
        </div>

        <div className="flex flex-col justify-center items-center h-full shadow-darkBlueBG shadow-xl ">
          <img
            className="rounded-lg w-full h-full    "
            src={`https://image.tmdb.org/t/p/w500/` + film.movieImg}
            alt="movie-image"
          />

          {/* <MovieSubInfo movie={movie} /> */}

          {/* <p className="movieTitle text-center">{film.movieTitle}</p> */}
          {/* <p>{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
};
export default SavedCard;

//http://image.tmdb.org/t/p/w500//cLqyz8aMgR0veS3U1ESKeIwD0TA.jpg
