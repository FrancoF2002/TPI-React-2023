import React from 'react'
//Import de Firebase
import { FirebaseApp } from "firebase/app";
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


const Guardados = () => {
  const db = getFirestore(FirebaseApp)

  const [film, setFilm] = useState();

  const saveFilm = async (id) => {
    await addDoc((db, 'guardados'), {
      ...film
    })

    setFilm(...film)
  }

  return (
    <div>
        
    </div>
  )
}

export default Guardados