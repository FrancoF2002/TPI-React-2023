import { createContext, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useState } from "react";

//Creacion del contexto
export const authContext = createContext();

// Custom Hook para facilitar el uso del context. Cuando se llame al mismo en los demas archivos, se agiliza un poco la llamada. Ej: const {user} = useAuth(). Primero se verifica que exista
export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) throw new Error("There is no Auth Provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  //estado para guardar la sesion actual del user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //funcion que registra el usuario en firebase
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      try {
        const user = {
          uid: result.user.uid,
          arrayFilms: [],
        };
        const usersRef = collection(db, "users");
        setDoc(doc(usersRef, result.user.uid), user);
      } catch (e) {
        console.error("Error al iniciar con correo y pass ", e);
      }
    });

  //funcion que inicia sesion con auth de firebase
  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //funcion para cerrar la sesion del usuario
  const logOut = () => signOut(auth);

  //funcion para registarse con una cuenta de google
  const loginWithgoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      try {
        const user = {
          uid: result.user.uid,
          arrayFilms: [],
        };
      
        const usersRef = collection(db, "users");
        setDoc(doc(usersRef, user.uid), user);
      } catch (e) {
        console.error("Error al iniciar con google ", e);
      }
    });
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  //useEffect para escuchar los cambios de estado en la sesion del ususario, ej: cuando se registra, inicia  y cierra sesion.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        logIn,
        user,
        logOut,
        loading,
        loginWithgoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
