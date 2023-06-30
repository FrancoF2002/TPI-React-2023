import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../shared/Loader/Loader";

import { useApi } from "../../../hooks/useApi";

const MovieDescription = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);

  const [dataVideo, setDataVideo] = useState({
    id: 550,
    results: [
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "Fight Club (1999) Trailer - Starring Brad Pitt, Edward Norton, Helena Bonham Carter",
        key: "O-b2VfmmbyA",
        site: "YouTube",
        size: 720,
        type: "Trailer",
        official: false,
        published_at: "2016-03-05T02:03:14.000Z",
        id: "639d5326be6d88007f170f44",
      },
      {
        iso_639_1: "en",
        iso_3166_1: "US",
        name: "#TBT Trailer",
        key: "BdJKm16Co6M",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
        official: true,
        published_at: "2014-10-02T19:20:22.000Z",
        id: "5c9294240e0a267cd516835f",
      },
    ],
  });

  const [dataMovie, setDataMovie] = useState({
    adult: false,
    backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    belongs_to_collection: null,
    budget: 63000000,
    genres: [
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    homepage: "http://www.foxmovies.com/movies/fight-club",
    id: 550,
    imdb_id: "tt0137523",
    original_language: "en",
    original_title: "Fight Club",
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    popularity: 61.416,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    production_companies: [
      {
        id: 508,
        logo_path: "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
        name: "Regency Enterprises",
        origin_country: "US",
      },
      {
        id: 711,
        logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
        name: "Fox 2000 Pictures",
        origin_country: "US",
      },
      {
        id: 20555,
        logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
        name: "Taurus Film",
        origin_country: "DE",
      },
      {
        id: 54051,
        logo_path: null,
        name: "Atman Entertainment",
        origin_country: "",
      },
      {
        id: 54052,
        logo_path: null,
        name: "Knickerbocker Films",
        origin_country: "US",
      },
      {
        id: 4700,
        logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
        name: "The Linson Company",
        origin_country: "US",
      },
      {
        id: 25,
        logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        name: "20th Century Fox",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "1999-10-15",
    revenue: 100853753,
    runtime: 139,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Mischief. Mayhem. Soap.",
    title: "Fight Club",
    video: false,
    vote_average: 8.433,
    vote_count: 26280,
  });

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
      {dataVideo.results.map((trailer, i) => {
        if (trailer.type === "Trailer" && i === 0) {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={trailer.id}
            >
              <iframe
                className="aspect-video w-full rounded-lg max-w-2xl"
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
