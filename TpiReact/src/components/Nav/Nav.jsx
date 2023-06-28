import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";
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
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="nav">
      {/* <button onClick={handleLogOut}>Log out</button> */}

      {/* <div className="navIcon">
        
        <NavHomeIcon />
      </div> */}
      <NavLink to={'/home'} className="nav__icon-container">
        <LogoIcon />
      </NavLink>

      <div className="flex gap-[18px] items-center justify-center xxs:gap-8 sm:gap-10 md:gap-14 lg:gap-20">
        <NavLink to={"/movies"} className="nav__icon-container">
          <NavMoviesIcon />
        </NavLink>
        <NavLink to={"/series"} className="nav__icon-container">
          <NavSeriesIcon />
        </NavLink>
        <NavLink to={"/saved"} className="nav__icon-container">
          <NavBookmarkIcon />
        </NavLink>
      </div>

      <div className="w-6 h-6 rounded-full bg-customRed  border-[1px] xxs:w-7 xxs:h-7 sm:h-8 sm:w-8"></div>
    </div>
  );
};
export default Nav;
