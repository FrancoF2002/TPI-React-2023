import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const { signUp,loginWithgoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  //funcion asincrona que se ejecuta cuando el usuario hace submit del form de registro.
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Se intenta hacer el signup con email y pass, si es exitoso se envia a la home donde se van a mostrar datos del usuario.
    try {
      await signUp(user.email, user.password);
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

  return (
    <div className=" sides-padding flex flex-col justify-center items-center h-screen ">
      {/* Si hay un error al registarse, muestra el mensaje aca, el fomulario siempre se sigue mostrando.
      {error && <p> {error}</p>} 
      */}
      <h4 className="form-title mb-5  text-customRed tracking-wider text-xl xxs:text-2xl">
        ¡Bienvenido!
      </h4>
      <form className="form" onSubmit={handleSubmit}>
        {/* <div className="input-container">
          <label className="label" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="username"
            //onChange={handleChange}
            className="input"
          />
        </div> */}

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

        <div className="input-container">
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="input"
          />
        </div>

        <button className="btn-loggin">Registrarse</button>
        <button className="btn-google" onClick={handleGoogleSignin}>
          Continuar con Google
        </button>
      </form>
      <div className="mt-10 text-white flex flex-col justify-center items-center">
        <span>¿Ya tienes una cuenta?</span>
        <Link
          to={"/login"}
          className="underline underline-offset-4 hover:opacity-90"
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
