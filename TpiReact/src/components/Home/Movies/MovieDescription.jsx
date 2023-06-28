import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../shared/Loader/Loader";

const MovieDescription = () => {
  const params = useParams();

  const [movie, setMovie] = useState();
  const [videos, setVideos] = useState([
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: 'Abbey Road Recording Sessions - "Worlds Collide"',
      key: "2OiqqiG3pyM",
      site: "YouTube",
      size: 1080,
      type: "Behind the Scenes",
      official: true,
      published_at: "2023-06-24T16:00:02.000Z",
      id: "649a28b67e348300e237683f",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "London Projection",
      key: "GRAkxHVNu9s",
      site: "YouTube",
      size: 1080,
      type: "Featurette",
      official: true,
      published_at: "2023-06-16T16:18:29.000Z",
      id: "649021f52f8d090100ab5173",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Supergirl Featurette",
      key: "ZFQ7pYcbbis",
      site: "YouTube",
      size: 1080,
      type: "Featurette",
      official: true,
      published_at: "2023-05-31T11:39:16.000Z",
      id: "647c19a993828e011624ca51",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Final Trailer",
      key: "jprhe-cWKGs",
      site: "YouTube",
      size: 2160,
      type: "Trailer",
      official: true,
      published_at: "2023-05-24T00:00:24.000Z",
      id: "646d5c05d185720140330a6e",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Flashback Fridays: Batman Returns..Again!",
      key: "obwv4OEKjyg",
      site: "YouTube",
      size: 1080,
      type: "Featurette",
      official: true,
      published_at: "2023-05-19T22:00:22.000Z",
      id: "64682a7933a376013b3daefc",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Official Trailer 2",
      key: "r51cYVZWKdY",
      site: "YouTube",
      size: 2160,
      type: "Trailer",
      official: true,
      published_at: "2023-04-25T19:00:18.000Z",
      id: "644823dec51acd0566a95dcc",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Teaser",
      key: "xMxUg7IV_dk",
      site: "YouTube",
      size: 720,
      type: "Teaser",
      official: true,
      published_at: "2023-02-13T01:15:37.000Z",
      id: "63eafaea813cb600dc066760",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Big Game TV Spot",
      key: "M0zdJOM_5Vg",
      site: "YouTube",
      size: 2160,
      type: "Teaser",
      official: true,
      published_at: "2023-02-13T00:23:56.000Z",
      id: "63e983cb9512e1008cb7dbbf",
    },
    {
      iso_639_1: "en",
      iso_3166_1: "US",
      name: "Official Trailer",
      key: "hebWYacbdvc",
      site: "YouTube",
      size: 2160,
      type: "Trailer",
      official: true,
      published_at: "2023-02-12T22:59:38.000Z",
      id: "63e973b01277780079f29a92",
    },
  ]);

  const [id, setId] = useState(params.id);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGVhMTZjNjkyZDU2NWVkNTlmODk3NDBiOTQyMjQ1NyIsInN1YiI6IjY0NmJkZDYwNTRhMDk4MDE1NWUyZjRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hkvWfebO8WW7zOhYZOXjr9DS37EyXjsOBGM7t-ebgNk",
    },
  };
  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b0ea16c692d565ed59f89740b9422457`
    )
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  };
  const fetchVideo = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/298618/videos?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setVideos(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    //fetchMovie()
    //fetchVideo();
    console.log(videos);
  }, []);

  if (!videos) {
    return (
      <p className="text-white">
        {" "}
        <Loader />{" "}
      </p>
    );
  }
  return (
    <div className="text-white">
      {videos.reverse().map((trailer) => {
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
export default MovieDescription;
