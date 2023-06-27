import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const navigate2 = useNavigate();

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
      setError('')
    } catch (error) {
      //En caso de que haya un error, se va a setear el estado con setError y se muestra en pantalla, o en consola.
      console.log(error.message);
      setError(error.message);

      //Firebase tiene varios codigos de errores que se pueden checkear y mostrar un mensaje personalizado en pantalla. Ej: auth/internal-error && auth/email-already-in-use
    }


  };

  return (
    <div>
      {/* Si hay un error al registarse, muestra el mensaje aca, el fomulario siempre se sigue mostrando. */}
      {error && <p> {error}</p>}

      <form className="form-register" onSubmit={handleSubmit}>

        <h4>Register</h4>
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
        <button className="buttons">Register</button>
      </form>
    </div>
  );
};

export default Register;
