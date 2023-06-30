import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getSaved(uid) {
  const savedFilms = [];
  const docsRef = collection(db, "users");
  const q = query(docsRef, where("uid", "==", uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    savedFilms.push(doc.data());
  });

  return savedFilms > 0 ? savedFilms : null;
}
