import { useParams } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import { useApi } from "../../../hooks/useApi";

const MovieDescription = () => {
  const params = useParams();

  const {
    loading: loadingMovie,
    data: dataMovie,
    error: errorMovie,
  } = useApi(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`);

  if (!dataMovie) {
    return <Loader />;
  }
  return (
    <div className=" sides-padding max-w-6xl mx-auto lg:mt-10">
      <div className="flex w-full justify-between items-center text-white tracking-wider mb-2">
        <h3 className="form-title text-start m-0 sm:text-2xl md:text-3xl lg:text-4xl ">
          {dataMovie?.original_title}
        </h3>
        <span className="form-title text-end m-0 font-medium ">
          {Math.round(dataMovie?.vote_average * 10) / 10}/10{" "}
        </span>
      </div>

      <div>
        <img
          className="w-full h-full  rounded-md"
          src={"http://image.tmdb.org/t/p/w500/" + dataMovie?.backdrop_path}
          alt=""
        />
      </div>
      <div className="flex  text-sm items-center justify-start gap-1 mt-1 xxs:text-base sm:text-lg">
        {dataMovie?.genres.map((dateGenres, index) => {
          return (
            <div key={dateGenres.name} className="">
              <p className=" text-white opacity-50 font-medium  ">
                {dateGenres.name}
                {index !== dataMovie?.genres.length - 1 ? "," : ""}
              </p>
            </div>
          );
        })}
        <p className="w-full text-end  text-white opacity-80 font-medium ">
          {dataMovie?.release_date.slice(0, 4)}
        </p>
      </div>
      <div className="text-white mt-2">
        <h4 className="description-subTitle mb-1">Description:</h4>
        <p className="text-sm xxs:text-base lg:text-lg">
          {dataMovie?.overview}
        </p>
      </div>

      <h5 className="description-subTitle mt-5  ">Aditional Information:</h5>
      <div className="text-white flex flex-col w-full  ">
        <div className="description-info-container">
          {" "}
          <span>Status:</span>{" "}
          <span className="opacity-70">{dataMovie?.status}</span>
        </div>

        <div className="description-info-container">
          {" "}
          <span>Duration:</span>{" "}
          <span className="opacity-70">{dataMovie?.runtime}min</span>
        </div>

        <div className="description-info-container">
          <span> Created by: </span>
          <div className="flex flex-col pb-10">
            {dataMovie?.production_companies.map((creator) => {
              return (
                <span className="opacity-70" key={creator.id}>
                  {creator.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDescription;
