import { useParams } from "react-router-dom";
import { useState} from "react";
import Loader from "../../shared/Loader/Loader";
import { useApi } from "../../../hooks/useApi";
const MovieDescription = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);

  //Ya funcionando el custom Hook.
/*
   const {
     loading: loadingVideo,
     data: dataVideo,
     error: errorVideo,
   } = useApi(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
 const {
     loading: loadingMovie,
     data: dataMovie,
     error: errorMovie, 
   } = useApi(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);

*/

  if (!dataMovie && !dataVideo) {
    return <Loader />;
  }
  return (
    <div className="text-white sides-padding flex flex-col   gap-3 w-full">
       {dataVideo.results.map((trailer) => {
        if (trailer.type === "Trailer") {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={trailer.id}
            >
              <iframe
                className="aspect-video w-full rounded-lg"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
              />
            </div>
          );
        }
      })} 
    </div>
  );
};
export default MovieDescription;
