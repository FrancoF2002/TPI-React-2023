import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import Loader from "../../shared/Loader/Loader";
const SerieDescription = () => {
  const params = useParams();

  const {
    loading: loadingSerie,
    data: serie,
    error: errorSerie,
  } = useApi(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US`);

  if (!serie ) {
    return <Loader />;
  }

  return (
    <div className=" sides-padding max-w-6xl mx-auto lg:mt-10">
      <div className="flex w-full justify-between items-center text-white tracking-wider mb-2">
        <h3 className="form-title text-start m-0 sm:text-2xl md:text-3xl lg:text-4xl ">
          {serie?.original_name}
        </h3>
        <span className="form-title text-end m-0 font-medium ">
          {Math.round(serie?.vote_average * 10) / 10}/10{" "}
        </span>
      </div>

      <div>
        <img
          className="w-full h-full  rounded-md"
          src={"http://image.tmdb.org/t/p/w500/" + serie?.backdrop_path}
          alt=""
        />
      </div>
      <div className="flex text-sm  w-full items-start  justify-start mt-1 xxs:text-base sm:text-lg">
        <div className="flex w-full gap-3">
        {serie?.genres.map((dateGenres, index) => {
          return (
            <div key={dateGenres.name} >
              <p className=" text-white opacity-50 font-medium  ">
                {dateGenres.name} 
                {index !== serie?.genres.length - 1 ? " ," : ""}
              </p>
            </div>
          );
        })}
        </div>
        
        <p className=" text-end  text-white opacity-80 font-medium ">
          {serie?.first_air_date.slice(0, 4)}
        </p>
      </div>
      <div className="text-white mt-2">
        <h4 className="description-subTitle mb-1">Description:</h4>
        <p className="text-sm xxs:text-base lg:text-lg">{serie?.overview}</p>
      </div>

      <h5 className="description-subTitle mt-5  ">Aditional Information:</h5>
      <div className="text-white flex flex-col w-full  ">
        <div className="description-info-container">
          {" "}
          <span>Status:</span>{" "}
          <span className="opacity-70">{serie?.status}</span>
        </div>
        <div className="description-info-container">
          {" "}
          <span>Seasons:</span>{" "}
          <span className="opacity-70">{serie?.number_of_seasons}</span>
        </div>
        <div className="description-info-container">
          {" "}
          <span>Episodes:</span>{" "}
          <span className="opacity-70">{serie?.number_of_episodes}</span>
        </div>
        <div className="description-info-container">
          {" "}
          <span>Last episode:</span>{" "}
          <span className="opacity-70">{serie?.last_air_date.slice(0, 4)}</span>
        </div>
        <div className="description-info-container pb-10">
          Created by:{" "}
          {serie?.created_by.map((creator, index) => {
            return (
              <span className="opacity-70" key={creator.id}>
                {creator.name}{" "}
                {index !== serie?.created_by.length - 1 ? "," : ""}
              </span>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default SerieDescription;
