import Login from "../shared/Login/Login";

import { useAuth } from "../../context/authContext";

import { Navigate } from "react-router-dom";

const Landing = () => {
  const { user } = useAuth();

  

  if (user) return <Navigate to={"/home"} />;
  return (
    <div className=" sides-padding flex flex-col justify-center items-center h-screen ">
      {/* <NavBar />
      <Footer /> */}

      {/* <LogoIcon/> */}

      <Login />
    </div>
  );
};
export default Landing;
