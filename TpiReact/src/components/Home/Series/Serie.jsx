import React from 'react'
import { BookmarkIcon } from '../../../assets/icons/Icons';
import MovieSubInfo from "./../Movies/MovieSubInfo";
import SerieSubInfo from './SerieSubInfo';
import { useNavigate } from 'react-router-dom';

const Serie = ({serie}) => {

  const navigate = useNavigate();

  const SerieDetails = (id) => {
    navigate(`/serie/${id}`);
  };

  const saveFilm = () => {

  }

    return (
        <div className="movieCard" onClick={() => SerieDetails(serie.id)}>
    
          {/* onHover puede ir la descripcion con un backdrop negro */}
          <div className="movie__BookmarkContainer " onClick={saveFilm()}>
            <BookmarkIcon />
          </div>
    
          <div className="flex flex-col justify-center items-center  ">
            <img
              className="rounded-lg w-full h-full  mb-[4px]  "
              src={"http://image.tmdb.org/t/p/w500/" + serie.poster_path}
              alt="movie-image"
            />
    
            <p className="movieTitle text-center">{serie.name}</p>

          </div>
        </div>
      );
}

export default Serie