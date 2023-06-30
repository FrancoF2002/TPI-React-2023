import { auth, db } from "../firebase/firebase";

import { useAuth } from "../context/authContext";
  const { user, logOut, loading } = useAuth();

export  function saveFilm(film) {

  try {
    const usersRef = collection(db, "saved");
     updateDoc(doc(usersRef, film), user.uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
