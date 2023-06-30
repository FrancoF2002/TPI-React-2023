import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../context/authContext";
import SavedCard from "./SavedCard";
import Loader from "../../shared/Loader/Loader";
const Saved = () => {
  const { user, logOut, loading } = useAuth();

  const [savedFilms, setSavedFilms] = useState();
  async function getSaved() {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setSavedFilms(docSnap.data().arrayFilms);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getSaved();
  }, []);

  if (!savedFilms) {
    return <Loader />;
  }

  return (
    <div>
      <div className="moviesCardsContainer">
        {savedFilms.map((film) => {
          return <SavedCard film={film} key={film.movieId} />;
        })}
      </div>
    </div>
  );
};

export default Saved;
