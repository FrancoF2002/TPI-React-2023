import { Nav, NavItem, NavLink } from "reactstrap";
import { useAuth } from "../../../context/authContext";
import "../../NavBar/NavbarHome.css";
import "./Home.css";

// import Footer from "../../Footer/Footer"


const Home = () => {
  const { user, logOut, loading } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <h1> Loading...</h1>;

  return (
    <div className="container">
      <div className="divNav">
        <Nav
        card
        fill
        justified
        className="NavBarHome"
        >
            <NavItem>
              <NavLink
                active
                href="#"
                className="navLinkHomeCss"
              >
              Series
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="navLinkHomeCss">
              Peliculas
            </NavLink>
          </NavItem>
            <NavItem>
              <NavLink
                active
                href="#"
                className="navLinkHomeCss"
              >
              Ver mas tarde
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                active
                href="#"
                className="navLinkHomeCss"
              >
              Favoritos
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink
                active
                href="#"
                className="navLinkHomeCss"
              >
              <button onClick={handleLogOut}>Log out</button>
              </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div>
        <h1 className=" mx-auto text-4xl ">Welcome {user.displayName} {user.email}</h1>
      </div>
      

      <div className="ContendoresDeListas">
        <div className="PeliculasCompleto">
          <h3>Peliculas</h3>
            <div className="Peliculas">    
              <img src="" alt="" />
              <p>Nombre Peli</p>
              <p>Fecha</p>
              <p>Descripcion</p>
            </div>
        </div>
        
        <div className="SeriesCompleto">
          <h3>Series</h3>
            <div className="Series"> 
              <img src="" alt="" />
              <p>Nombre Serie</p>
              <p>Fecha</p>
              <p>Descripcion</p>
              
            </div>
        </div>
      </div>
</div>
      
   
  );
};
export default Home;
