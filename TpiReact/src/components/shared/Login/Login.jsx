import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const { logIn, loginWithgoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
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
      setError("We have sent you an email to recover your password");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className=" sides-padding flex flex-col justify-center items-center h-screen ">
       
      
      <h2 className="form-title mb-5  text-customRed tracking-wider text-xl xxs:text-2xl ">  ¡Bienvenido otra vez!</h2>
      <h3 className="form-title">Ingresa con tu cuenta para continuar</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label" htmlFor="email">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="input-container ">
          <div className="flex justify-between w-full">
            <label className="label" htmlFor="password">
              Contraseña
            </label>
            <a
              href="#!"
              className="forgot-password"
              onClick={handleResetPassword}
            >
              Olvidaste contraseña?
            </a>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="input"
          />
        </div>
        {error && (
          <p className="text-yellow-300 text-sm font-light text-start w-full">
            {" "}
            Asegurese de completar correctamente todos los campos
          </p>
        )}
        {/*

          Error de firebase
         {error && <p> {error}</p>} 
         */}

        <button className="btn-loggin">Iniciar sesión</button>
        <button className="btn-google" onClick={handleGoogleSignin}>
          Continuar con Google
        </button>
      </form>

      <div className="mt-10 text-white flex flex-col justify-center items-center">
        <span>¿No tienes una cuenta?</span>
        <Link
          to={"/register"}
          className="underline underline-offset-4 hover:opacity-90"
        >
          Registrate
        </Link>
      </div>
    </div>
  );
};
export default Login;
