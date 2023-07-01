import React from "react";
import { BookmarkIcon } from "../../../assets/icons/Icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { db } from "../../../firebase/firebase";

import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const Serie = ({ serie }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const SerieDetails = (id) => {
    navigate(`/serie/${id}`);
  };

  async function filmExist(id) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    let exist = false;

    if (docSnap.exists()) {
      docSnap.data().arrayFilms.map((film) => {
        if (film.movieId === id) {
          exist = true;
        }
      });
    }
    return exist;
  }

  const handleSaveFilm = async (film) => {
    const exist = await filmExist(film.id);

    if (!exist) {
      saveMovie({
        movieId: film.id,
        movieImg: film.poster_path,
        movieTitle: film.name,
        state: false,
      });
    }
  };

  async function saveMovie(film) {
    try {
      const savedRef = doc(db, "users", user.uid);
      await updateDoc(savedRef, {
        arrayFilms: arrayUnion(film),
      });
      console.log("Se guardo la serie");
    } catch (e) {
      console.log("Error al guardar la serie : ", e);
    }
  }

  return (
    <div className="movieCard relative">
      <span
        className="movie__BookmarkContainer "
        onClick={() => handleSaveFilm(serie)}
      >
        <BookmarkIcon />
      </span>

      <div
        className="flex flex-col justify-center items-center  "
        onClick={() => SerieDetails(serie.id)}
      >
        <img
          className="rounded-lg w-full h-full  mb-[4px]  "
          src={"http://image.tmdb.org/t/p/w500/" + serie.poster_path}
          alt="movie-image"
        />

        {/* <p className="movieTitle text-center">{serie.name}</p> */}
      </div>
    </div>
  );
};

export default Serie;
