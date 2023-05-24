import { Nav, NavItem, NavLink } from "reactstrap";
import { useAuth } from "../../context/authContext";
import '../NavBar/NavBarHome.css'
import "./Home.css";
import useApi from "../../hooks/useApi"
import { useEffect } from "react";



const Home = () => {
  const { user, logOut, loading } = useAuth();
  // const [movie, setMovies] = useState([]);

  const handleLogOut = async () => {
    await logOut();
  };

  // const callTheApi = () => {
  //   for (let i = 0; i < 10 ; i++) {
  //     const apiKey = import.meta.env.VITE_API_MOVIES_TOKEN;
  //     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.results[i].title))
  //     .catch((err) => console.log(err));
  //   }
  // };


  if (loading) return <h1> Loading...</h1>;

  // useEffect(() => {

   

  //  }, [])


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
              <p>Nombre pelicula</p>
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
      <Footer />
</div>
      
   
  );
};
export default Home;
