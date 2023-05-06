import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const authContext = createContext();

// Custom Hook para facilitar el uso del context. Cuando se llame al mismo en los demas archivos, se agiliza un poco la llamada. Ej: const {user} = useAuth()
export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) throw new Error("There is no Auth Provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  );
};
