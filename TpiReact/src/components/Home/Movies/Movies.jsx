import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import Loader from "../../shared/Loader/Loader";
const Movies = () => {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
      id: 385687,
      title: "Fast X",
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      media_type: "movie",
      genre_ids: [28, 80, 53],
      popularity: 11708.862,
      release_date: "2023-05-17",
      video: false,
      vote_average: 7.372,
      vote_count: 1465,
    },
    {
      adult: false,
      backdrop_path: "/l8z9gP7mAa7fIQql8KeeDX8n0at.jpg",
      id: 798286,
      title: "Beau Is Afraid",
      original_language: "en",
      original_title: "Beau Is Afraid",
      overview:
        "A paranoid man embarks on an epic odyssey to get home to his mother.",
      poster_path: "/wgVkkjigF31r1nZV80uV0xNIoun.jpg",
      media_type: "movie",
      genre_ids: [35, 12, 14],
      popularity: 56.623,
      release_date: "2023-03-11",
      video: false,
      vote_average: 7.201,
      vote_count: 284,
    },
    {
      adult: false,
      backdrop_path: "/6GIpI3X65J6DT2nSTSga9LnanGJ.jpg",
      id: 298618,
      title: "The Flash",
      original_language: "en",
      original_title: "The Flash",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      poster_path: "/cLqyz8aMgR0veS3U1ESKeIwD0TA.jpg",
      media_type: "movie",
      genre_ids: [878, 28, 12],
      popularity: 598.001,
      release_date: "2023-06-13",
      video: false,
      vote_average: 6.676,
      vote_count: 54,
    },
    {
      adult: false,
      backdrop_path: "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 16, 878],
      popularity: 2603.596,
      release_date: "2023-05-31",
      video: false,
      vote_average: 8.755,
      vote_count: 1276,
    },
    {
      adult: false,
      backdrop_path: "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
      id: 667538,
      title: "Transformers: Rise of the Beasts",
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 2024.849,
      release_date: "2023-06-06",
      video: false,
      vote_average: 7.429,
      vote_count: 253,
    },
    {
      adult: false,
      backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
      id: 603692,
      title: "John Wick: Chapter 4",
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 3442.728,
      release_date: "2023-03-22",
      video: false,
      vote_average: 7.919,
      vote_count: 2958,
    },
    {
      adult: false,
      backdrop_path: "/35OoC3JxHXrAOg4FAa2DrPCzUX9.jpg",
      id: 1010581,
      title: "My Fault",
      original_language: "es",
      original_title: "Culpa mía",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      media_type: "movie",
      genre_ids: [10749, 18],
      popularity: 1638.938,
      release_date: "2023-06-08",
      video: false,
      vote_average: 8.412,
      vote_count: 413,
    },
    {
      adult: false,
      backdrop_path: "/t6EN8SjaElEMGJjZzbekxqGsiXl.jpg",
      id: 76600,
      title: "Avatar: The Way of Water",
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 1181.839,
      release_date: "2022-12-14",
      video: false,
      vote_average: 7.701,
      vote_count: 8536,
    },
    {
      adult: false,
      backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      id: 502356,
      title: "The Super Mario Bros. Movie",
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      media_type: "movie",
      genre_ids: [16, 10751, 12, 14, 35],
      popularity: 2693.946,
      release_date: "2023-04-05",
      video: false,
      vote_average: 7.817,
      vote_count: 4691,
    },
    {
      adult: false,
      backdrop_path: "/7Yuf6j6N76SfqRWqT0I0ZUjICc2.jpg",
      id: 976573,
      title: "Elemental",
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land, & air residents live together, a fiery young woman & a go-with-the-flow guy will discover something elemental: How much they have in common.",
      poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
      media_type: "movie",
      genre_ids: [16, 35, 10751, 14, 10749],
      popularity: 349.199,
      release_date: "2023-06-14",
      video: false,
      vote_average: 7.8,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/o2xM9oVNDdm5tukYcGPj3jX3XpE.jpg",
      id: 626332,
      title: "Flamin' Hot",
      original_language: "en",
      original_title: "Flamin' Hot",
      overview:
        "The inspiring true story of Richard Montañez, the Frito Lay janitor who channeled his Mexican American heritage and upbringing to turn the iconic Flamin’ Hot Cheetos into a snack that disrupted the food industry and became a global pop culture phenomenon.",
      poster_path: "/a7KyFMPXj0iY4EoLq1PIGU1WJPw.jpg",
      media_type: "movie",
      genre_ids: [35, 18],
      popularity: 91.403,
      release_date: "2023-03-11",
      video: false,
      vote_average: 7.321,
      vote_count: 42,
    },
    {
      adult: false,
      backdrop_path: "/bqMWZ5hB7bcI1KK2TH29odwCgWX.jpg",
      id: 493529,
      title: "Dungeons & Dragons: Honor Among Thieves",
      original_language: "en",
      original_title: "Dungeons & Dragons: Honor Among Thieves",
      overview:
        "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
      poster_path: "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
      media_type: "movie",
      genre_ids: [12, 14, 35],
      popularity: 428.119,
      release_date: "2023-03-23",
      video: false,
      vote_average: 7.46,
      vote_count: 1683,
    },
    {
      adult: false,
      backdrop_path: "/9HziTnjEpreM4JBvD53snejX8rE.jpg",
      id: 575264,
      title: "Mission: Impossible - Dead Reckoning Part One",
      original_language: "en",
      original_title: "Mission: Impossible - Dead Reckoning Part One",
      overview:
        "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the fate of the world at stake, and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than his mission – not even the lives of those he cares about most.",
      poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 53],
      popularity: 77.917,
      release_date: "2023-07-10",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
      id: 447277,
      title: "The Little Mermaid",
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      media_type: "movie",
      genre_ids: [12, 10751, 14, 10749],
      popularity: 1168.216,
      release_date: "2023-05-18",
      video: false,
      vote_average: 6.176,
      vote_count: 645,
    },
    {
      adult: false,
      backdrop_path: "/jqwM0nhOLEFI1HHBabwr80Od3TC.jpg",
      id: 324857,
      title: "Spider-Man: Into the Spider-Verse",
      original_language: "en",
      original_title: "Spider-Man: Into the Spider-Verse",
      overview:
        'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
      poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 16, 878],
      popularity: 768.405,
      release_date: "2018-12-06",
      video: false,
      vote_average: 8.404,
      vote_count: 13108,
    },
    {
      adult: false,
      backdrop_path: "/cUHxmWfkp6se0Rt10Kr86bMCYDE.jpg",
      id: 1016084,
      title: "BlackBerry",
      original_language: "en",
      original_title: "BlackBerry",
      overview:
        "Two mismatched entrepreneurs – egghead innovator Mike Lazaridis and cut-throat businessman Jim Balsillie – joined forces in an endeavour that was to become a worldwide hit in little more than a decade. The story of the meteoric rise and catastrophic demise of the world's first smartphone.",
      poster_path: "/bj3FUtnQ34bsTM7IygK8dUHESEO.jpg",
      media_type: "movie",
      genre_ids: [35, 18, 36],
      popularity: 145.437,
      release_date: "2023-05-11",
      video: false,
      vote_average: 7.509,
      vote_count: 57,
    },
    {
      adult: false,
      backdrop_path: "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
      id: 640146,
      title: "Ant-Man and the Wasp: Quantumania",
      original_language: "en",
      original_title: "Ant-Man and the Wasp: Quantumania",
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 965.832,
      release_date: "2023-02-15",
      video: false,
      vote_average: 6.48,
      vote_count: 3255,
    },
    {
      adult: false,
      backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      id: 447365,
      title: "Guardians of the Galaxy Vol. 3",
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 1062.368,
      release_date: "2023-05-03",
      video: false,
      vote_average: 8.1,
      vote_count: 1950,
    },
    {
      adult: false,
      backdrop_path: "/pSIIL9RvWnIhwESdm3flFWVRIXs.jpg",
      id: 594767,
      title: "Shazam! Fury of the Gods",
      original_language: "en",
      original_title: "Shazam! Fury of the Gods",
      overview:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      poster_path: "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
      media_type: "movie",
      genre_ids: [35, 28, 14],
      popularity: 673.54,
      release_date: "2023-03-15",
      video: false,
      vote_average: 6.725,
      vote_count: 1942,
    },
    {
      adult: false,
      backdrop_path: "/d6eZyt3bRYldtjEzQe78b8YUikh.jpg",
      id: 1128568,
      title: "You Do You",
      original_language: "tr",
      original_title: "Merve Kült",
      overview:
        "Merve chose the bohemian life, but it didn't choose her back. Faced with eviction, she starts a new job and stumbles into a spicy setup with her boss.",
      poster_path: "/8fk4l8PvGGjHYCUpA4gGbyIoS3S.jpg",
      media_type: "movie",
      genre_ids: [35, 10749],
      popularity: 136.569,
      release_date: "2023-06-09",
      video: false,
      vote_average: 6.4,
      vote_count: 31,
    },
  ]);

  //const fetchMovies = () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGVhMTZjNjkyZDU2NWVkNTlmODk3NDBiOTQyMjQ1NyIsInN1YiI6IjY0NmJkZDYwNTRhMDk4MDE1NWUyZjRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hkvWfebO8WW7zOhYZOXjr9DS37EyXjsOBGM7t-ebgNk",
  //     },
  //   };

  //   fetch(
  //     "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const { results } = response;
  //       setMovies(results);
  //       console.log(results);
  //     })
  //     .catch((err) => console.error(err));
  // };





    //Despues descomentar y cambiar en el map
    
  // const {
  //   loading,
  //   data,
  //   error,
  // } = useApi(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`);

  const asd = {
    adult: false,
    backdrop_path: "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
    id: 385687,
    title: "Fast X",
    original_language: "en",
    original_title: "Fast X",
    overview: "Over many missions and against impossible odds",
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    media_type: "movie",
    genre_ids: [28, 80, 53],
    popularity: 11708.862,
    release_date: "2023-05-17",
    video: false,
    vote_average: 7.372,
    vote_count: 1465,
  };

  if (!movies) {
    return <Loader />;
  }

  return (
    <div className="moviesCardsContainer">
      {movies.map((movie, index) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Movies;
