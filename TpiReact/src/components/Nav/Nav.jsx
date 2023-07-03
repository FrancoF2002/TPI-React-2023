import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import {
  LogoIcon,
  NavBookmarkIcon,
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
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/*"
  ) {
    return null;
  }

  return (
    <div className="nav">
      <NavLink to={"/home"} className="nav__icon-container">
        <LogoIcon />
      </NavLink>

      <div className="flex gap-[18px] items-center justify-center xxs:gap-8 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-24">
        <NavLink to={"/movies"} className="nav__icon-container">
          <NavMoviesIcon />
          <p className="nav-text">Peliculas</p>
        </NavLink>
        <NavLink to={"/series"} className="nav__icon-container">
          <NavSeriesIcon />
          <p className="nav-text ">Series</p>
        </NavLink>
        <NavLink to={"/saved"} className="nav__icon-container">
          <NavBookmarkIcon />
          <p className="nav-text ">Guardados</p>
        </NavLink>
      </div>

      <div className="md:text-lg xl:text-xl" onClick={handleLogOut}>
        Logout{" "}
      </div>
    </div>
  );
};
export default Nav;
