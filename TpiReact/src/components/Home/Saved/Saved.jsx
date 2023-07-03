import React, { useEffect, useState } from "react";
import { doc,onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../context/authContext";
import SavedCard from "./SavedCard";
import Loader from "../../shared/Loader/Loader";

const Saved = () => {
  const { user } = useAuth();

  const [savedFilms, setSavedFilms] = useState();
  async function getSaved() {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      const docSnap = doc.data();

      if (docSnap) {
        setSavedFilms(docSnap.arrayFilms);
      } else {
        console.log("No such document!");
      }
    });
  }

  useEffect(() => {
    getSaved();
  }, []);

  if (!savedFilms) {
    return <Loader />;
  }

  return (
    <div className="">
      <h2 className=" sides-padding text-white text-xl mb-2 sm:text-2xl md:text-3xl">
        Guardados
      </h2>
      <div className="moviesCardsContainer ">
        {savedFilms.map((film) => {
          return <SavedCard film={film} key={film.movieId} />;
        })}
      </div>
    </div>
  );
};

export default Saved;
