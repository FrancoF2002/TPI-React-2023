import React from 'react'
import { BookmarkIcon } from '../../../assets/icons/Icons';
import MovieSubInfo from "./../Movies/MovieSubInfo";
import SerieSubInfo from './SerieSubInfo';

const Serie = ({serie}) => {
    return (
        <div className="movieCard" >
    
          {/* onHover puede ir la descripcion con un backdrop negro */}
          <div className="movie__BookmarkContainer ">
            <BookmarkIcon />
          </div>
    
          <div className="flex flex-col justify-center items-center  ">
            <img
              className="rounded-lg w-full h-full  mb-[4px]  "
              src={"http://image.tmdb.org/t/p/w500/" + serie.poster_path}
              alt="movie-image"
            />
    
            <SerieSubInfo serie={serie}/>
    
            <p className="movieTitle text-center">{serie.name}</p>

          </div>
        </div>
      );
}

export default Serie