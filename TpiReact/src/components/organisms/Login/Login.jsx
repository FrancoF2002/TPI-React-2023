import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const { logIn, loginWithgoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  //funcion asincrona que se ejecuta cuando el usuario hace submit del form de registro.
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Se intenta hacer el sign up con email y pass, si es exitoso se envia a la home donde se van a mostrar datos del usuario.
    try {
      await logIn(user.email, user.password);
      navigate("/home");
      setError("");
    } catch (error) {
      //En caso de que haya un error, se va a setear el estado con setError y se muestra en pantalla, o en consola.
      console.log(error.message);
      setError(error.message);

      //Firebase tiene varios codigos de errores que se pueden checkear y mostrar un mensaje personalizado en pantalla. Ej: auth/internal-error && auth/email-already-in-use
    }
  };

  //Funcion que se ejecuta cuando el usuario seleccion la opcion para iniciar sesion con Google.
  const handleGoogleSignin = async () => {
    try {
      await loginWithgoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  //Funcion que se ejecuta cuando el usuario apreta el boton de olvido de password
  const handleResetPassword = async () => {

    //Si no tiene un correo ingresado, se lo pide ingresar
    if (!user.email) return setError("Please enter your email");
    //Si ya ingresó el correo, entonces se ejecuta la funcion para recuperar la password, enviando un mail
    try {
      await resetPassword(user.email);
      setError('We have sent you an email to recover your password')
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="generalDiv">
      {/* Si hay un error al Iniciar sesion, muestra el mensaje aca, el fomulario siempre se sigue mostrando. */}
       {/* {error && <p> {error}</p>} */}
   
        
          <form className="form-register" onSubmit={handleSubmit}>   
          <h4>Login</h4>             
            <label htmlFor="email">Email</label> 
              <input
                type="email"
                name="email"
                placeholder="test@gmail.com"
                onChange={handleChange}
                className="controls-input"
              />
              
    
            <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder = "Ingrese su password"
                className="controls-input"
              />
               {error && <p> {error}</p>}
              <button className="buttonGoogle" onClick={handleGoogleSignin}>Sign in with Google</button>
              <button className="buttons">Log in</button>
              <a href="#!" onClick={handleResetPassword}> <u>Forgot Password? </u> </a>
              {error && <p> Completar todos los campos</p>}
          </form> 
    
      
      
        
    </div>
  );
};
export default Login;
