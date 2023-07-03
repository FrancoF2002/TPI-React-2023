import React from "react";
import Serie from "./Serie";
import Loader from "../../shared/Loader/Loader";
import { useApi } from "../../../hooks/useApi";

const Series = () => {
  

  const {
    loading: loadingSeries,
    data: series,
    error: errorSeries,
  } = useApi(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`);

  if (!series || loadingSeries) {
    return <Loader />;
  }
  return (
    <div>
      {/* <div className="flex justify-center">
          
           <input
            type="text"
            value={busquedaFilm}
            placeholder="Ingrese nombre del film"
            onChange={handlerChange}
            />
        </div> */}
      <div className="moviesCardsContainer">
        {series.results.map((serie) => {
          return <Serie serie={serie} key={serie.id} />;
        })}
      </div>
    </div>
  );
};

export default Series;
