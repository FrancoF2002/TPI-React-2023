import { useState } from "react";
import { useAuth } from "../../../context/authContext";
const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const { signUp } = useAuth();
  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(user.email, user.password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        type="email"
        name="email"
        placeholder="test@gmail.com"
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />

      <button>Register</button>
    </form>
  );
};
export default Register;
