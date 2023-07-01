import { BookmarkIcon } from "../../../assets/icons/Icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { db } from "../../../firebase/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const showMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };


  async function filmExist(id) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    let exist = false;

    if (docSnap.exists()) {
      docSnap.data().arrayFilms.map((film) => {
        if (film.movieId === id) {
          exist = true;
        }
      });
    }
    return exist;
  }

  const handleSaveFilm = async (film) => {
    const exist = await filmExist(film.id);
    
    if (!exist) {
      saveMovie({
        movieId: film.id,
        movieImg: film.poster_path,
        movieTitle: film.title,
        state: false,
      });
    } else {
      console.log("No se puede, ya existe");
    }
  };

  async function saveMovie(film) {
    try {
      const savedRef = doc(db, "users", user.uid);
      await updateDoc(savedRef, {
        arrayFilms: arrayUnion(film),
      });
      console.log('Se guardo la pelicula')
    } catch (e) {
      console.log("Error al guardar la pelicula saveMovie: ", e);
    }
  }

  return (
    <div className="movieCard relative">
      <span
        className="movie__BookmarkContainer "
        onClick={() => handleSaveFilm(movie)}
      >
        <BookmarkIcon />
      </span>

      <div
        className="flex flex-col justify-center items-center h-full "
        onClick={() => showMovieDetail(movie.id)}
      >
        <img
          className="rounded-lg w-full h-full     "
          src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie-image"
        />
      </div>
    </div>
  );
};
export default Movie;
