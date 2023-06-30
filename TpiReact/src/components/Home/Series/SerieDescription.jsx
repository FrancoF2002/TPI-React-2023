import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";


const SerieDescription = () => {
  const params = useParams();

  const [serie, setSerie] = useState({
    adult: false,
    backdrop_path: "/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
    created_by: [
      {
        id: 66633,
        credit_id: "52542286760ee31328001a7b",
        name: "Vince Gilligan",
        gender: 2,
        profile_path: "/z3E0DhBg1V1PZVEtS9vfFPzOWYB.jpg",
      },
    ],
    episode_run_time: [],
    first_air_date: "2008-01-20",
    genres: [
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
    homepage: "http://www.amc.com/shows/breaking-bad",
    id: 1396,
    in_production: false,
    languages: ["en", "de", "es"],
    last_air_date: "2013-09-29",
    last_episode_to_air: {
      id: 62161,
      name: "Felina",
      overview: "All bad things must come to an end.",
      vote_average: 9.2,
      vote_count: 182,
      air_date: "2013-09-29",
      episode_number: 16,
      production_code: "",
      runtime: 56,
      season_number: 5,
      show_id: 1396,
      still_path: "/pA0YwyhvdDXP3BEGL2grrIhq8aM.jpg",
    },
    name: "Breaking Bad",
    next_episode_to_air: null,
    networks: [
      {
        id: 174,
        logo_path: "/alqLicR1ZMHMaZGP3xRQxn9sq7p.png",
        name: "AMC",
        origin_country: "US",
      },
    ],
    number_of_episodes: 62,
    number_of_seasons: 5,
    origin_country: ["US"],
    original_language: "en",
    original_name: "Breaking Bad",
    overview:
      "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    popularity: 277.168,
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    production_companies: [
      {
        id: 11073,
        logo_path: "/aCbASRcI1MI7DXjPbSW9Fcv9uGR.png",
        name: "Sony Pictures Television Studios",
        origin_country: "US",
      },
      {
        id: 33742,
        logo_path: null,
        name: "High Bridge Productions",
        origin_country: "US",
      },
      {
        id: 2605,
        logo_path: null,
        name: "Gran Via Productions",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    seasons: [
      {
        air_date: "2009-02-17",
        episode_count: 11,
        id: 3577,
        name: "Specials",
        overview: "",
        poster_path: "/40dT79mDEZwXkQiZNBgSaydQFDP.jpg",
        season_number: 0,
        vote_average: 0,
      },
      {
        air_date: "2008-01-20",
        episode_count: 7,
        id: 3572,
        name: "Season 1",
        overview:
          'High school chemistry teacher Walter White\'s life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman "teaches" Walter a new trade.',
        poster_path: "/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg",
        season_number: 1,
        vote_average: 8.3,
      },
      {
        air_date: "2009-03-08",
        episode_count: 13,
        id: 3573,
        name: "Season 2",
        overview:
          "Walt must deal with the chain reaction of his choice, as he and Jesse face new and severe consequences. When danger and suspicion around Walt escalate, he is pushed to new levels of desperation. Just how much higher will the stakes rise? How far is Walt willing to go to ensure his family's security? Will his grand plan spiral out of control?",
        poster_path: "/e3oGYpoTUhOFK0BJfloru5ZmGV.jpg",
        season_number: 2,
        vote_average: 8.3,
      },
      {
        air_date: "2010-03-21",
        episode_count: 13,
        id: 3575,
        name: "Season 3",
        overview:
          "Walt continues to battle dueling identities: a desperate husband and father trying to provide for his family, and a newly appointed key player in the Albuquerque drug trade. As the danger around him escalates, Walt is now entrenched in the complex worlds of an angst-ridden family on the verge of dissolution, and the ruthless and unrelenting drug cartel.",
        poster_path: "/ffP8Q8ew048YofHRnFVM18B2fPG.jpg",
        season_number: 3,
        vote_average: 8.3,
      },
      {
        air_date: "2011-07-17",
        episode_count: 13,
        id: 3576,
        name: "Season 4",
        overview:
          "Walt and Jesse must cope with the fallout of their previous actions, both personally and professionally. Tension mounts as Walt faces a true standoff with his employer, Gus, with neither side willing or able to back down. Walt must also adjust to a new relationship with Skyler, whom while still reconciling her relationship with Walt, is committed to properly laundering Walt’s money and ensuring her sister Marie and an ailing Hank are financially stable.",
        poster_path: "/5ewrnKp4TboU4hTLT5cWO350mHj.jpg",
        season_number: 4,
        vote_average: 8.5,
      },
      {
        air_date: "2012-07-15",
        episode_count: 16,
        id: 3578,
        name: "Season 5",
        overview:
          "Walt is faced with the prospect of moving on in a world without his enemy. As the pressure of a criminal life starts to build, Skyler struggles to keep Walt’s terrible secrets. Facing resistance from sometime adversary and former Fring lieutenant Mike, Walt tries to keep his world from falling apart even as his DEA Agent brother in law, Hank, finds numerous leads that could blaze a path straight to Walt. \n\nAll bad things must come to an end.",
        poster_path: "/895qySGNOWp9nJgV7llPBKv3ERk.jpg",
        season_number: 5,
        vote_average: 8.9,
      },
    ],
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "German",
        iso_639_1: "de",
        name: "Deutsch",
      },
      {
        english_name: "Spanish",
        iso_639_1: "es",
        name: "Español",
      },
    ],
    status: "Ended",
    tagline: "Change the equation.",
    type: "Scripted",
    vote_average: 8.883,
    vote_count: 11891,
  });
  const [videoSerie, setVideoSerie] = useState([]);

  const [id, setId] = useState(params.id);

  
 
   //Ya funcionando el custom Hook.
/*
   const {
     loading: loadingVideo,
     data: videoSerie,
     error: errorVideo,
   } = useApi(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
 const {
     loading: loadingSerie,
     data: serie,
     error: errorSerie, 
   } = useApi(`https://api.themoviedb.org/3/tv/${id}?language=en-US`);

*/

  if (!serie && !videoSerie) {
    return <Loader />;
  }

  return (
    <div className="text-white">
      <div className="flex">
        <div className="flex flex-col text-center w-1/2">
          <h2>{serie.original_name}</h2>
          <p>{serie.overview}</p>
          <p>{serie.first_air_date}</p>
          <p>
            Creador:{" "}
            {serie.created_by.map((dateName) => {
              return <p>{dateName.name}</p>;
            })}
          </p>
          <p>
            Generos:{" "}
            {serie.genres.map((dateGenres) => {
              return <p>{dateGenres.name}</p>;
            })}
          </p>
        </div>
        <div className="p-5">
          <img
            className="w-[320px] h-full"
            src={"http://image.tmdb.org/t/p/w500/" + serie.poster_path}
            alt=""
          />
        </div>
      </div>
      {videoSerie.reverse().map((trailer) => {
        if (trailer.type === "Trailer") {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={trailer.id}
            >
              <div className="">Video {trailer.name}</div>

              <iframe
                className="aspect-video w-full"
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

export default SerieDescription;