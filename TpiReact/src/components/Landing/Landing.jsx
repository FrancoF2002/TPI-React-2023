
import Login from "../shared/Login/Login";
import { LogoIcon } from "../../assets/icons/Icons";

const Landing = () => {
  return (
    <div className=" sides-padding flex flex-col justify-center items-center h-screen ">
      {/* <NavBar />
      <Footer /> */}
    
      <LogoIcon/>









      <h2 className="form-title mb-5  text-customRed tracking-wider text-xl xxs:text-2xl ">  ¡Bienvenido otra vez!</h2>
      <h3 className="form-title">Ingresa con tu cuenta para continuar</h3>
      <Login />
    </div>
  );
};
export default Landing;
