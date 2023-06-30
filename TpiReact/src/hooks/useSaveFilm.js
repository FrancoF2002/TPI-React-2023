import { app, db } from "../firebase/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const initialState = {
  id: "",
  title: "",
  date: "",
};

export async function useSaveFilm(newFilm) {
  const [filmToSave, setFilmToSave] = useState(newFilm);

  try {
    await addDoc(collection(db, "guardados"), { ...filmToSave });
  } catch (error) {
    console.error(error);
  }
}
