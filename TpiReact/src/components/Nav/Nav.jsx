import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useLocation } from 'react-router-dom';
import {
  LogoIcon,
  NavBookmarkIcon,
  NavHomeIcon,
  NavMoviesIcon,
  NavSeriesIcon,
} from "../../assets/icons/Icons";
const Nav = () => {
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };


  const location = useLocation();

  // Mostrar la barra de navegación solo en ciertas rutas
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="nav">
      {/* <button onClick={handleLogOut}>Log out</button> */}

      {/* <div className="navIcon">
        
        <NavHomeIcon />
      </div> */}
      <div className="nav__icon-container ">
        <LogoIcon />
      </div>

      <div className="flex gap-[18px] items-center justify-center">
        <div className="nav__icon-container" onClick={() => navigate("/movies")}>
          <NavMoviesIcon />
        </div>
        <div
          className="nav__icon-container"
          onClick={() => navigate("/series")}
        >
          <NavSeriesIcon />
        </div>
        <div className="nav__icon-container" onClick={() => navigate("/saved")}>
          <NavBookmarkIcon />
        </div>
      </div>

      <div className="w-6 h-6 rounded-full bg-customRed  border-[1px]"></div>
    </div>
  );
};
export default Nav;
