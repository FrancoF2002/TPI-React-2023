import { BookmarkIconFilled } from "../../../assets/icons/Icons";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const SavedCard = ({ film }) => {
  const { user } = useAuth();
  const [isRemoved, setIsRemoved] = useState(false);

  const navigate = useNavigate();

  const handleRemoveFilm = () => {
    removeFilm();
  };

  const showMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleUpdateFilm = async (film) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const array = docSnap.data().arrayFilms;

      const newArray = array.map((element) => {
        if (element.movieId === film.movieId) {
          console.log(film);
          return { ...element, state: !film.state };
        }
        return element;
      });
      updateFilm(newArray);
    } else {
      console.log("No existe el documento a actualizar handleUpdateFilm.");
    }

    async function updateFilm(newFilmArray) {
      try {
        const savedRef = doc(db, "users", user.uid);
        await updateDoc(savedRef, { arrayFilms: newFilmArray });
      } catch (e) {
        console.log("Error al actualizar updateFilm ", e);
      }
    }
  };

  async function removeFilm() {
    try {
      setIsRemoved(true);

      const savedRef = doc(db, "users", user.uid);
      await updateDoc(savedRef, {
        arrayFilms: arrayRemove(film),
      });
    } catch (e) {
      console.log("Error al remover film RemoveFilm: ", e);
    }
  }

  return (
    <div className={`movieCard hover:scale-100 ${isRemoved ? "hidden" : ""}`}>
      <div className="relative">
        <div
          className="movie__BookmarkContainer fill-white hover:fill-none"
          onClick={() => handleRemoveFilm(film)}
        >
          <BookmarkIconFilled />
        </div>

        <div className="flex flex-col justify-center items-center h-full shadow-darkBlueBG shadow-xl ">
          <img
            className="rounded-t-lg w-full h-full    "
            src={`https://image.tmdb.org/t/p/w500/` + film.movieImg}
            onClick={() => showMovieDetail(film.id)}
            alt="movie-image"
          />
        </div>
        <div
          className={`flex hover:opacity-60 gap-2 items-center justify-center text-center text-white tracking-wider rounded-b-lg ${
            !film.state ? "bg-customRed" : "bg-customGreen"
          }`}
          onClick={() => handleUpdateFilm(film)}
        >
          <span className="">{film.state ? "Vista" : "Pendiente"}</span>

          <span className="text-end">↺</span>
        </div>
      </div>
    </div>
  );
};
export default SavedCard;

//http://image.tmdb.org/t/p/w500//cLqyz8aMgR0veS3U1ESKeIwD0TA.jpg
