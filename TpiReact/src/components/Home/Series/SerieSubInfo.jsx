import React from 'react'
import Divider from '../../shared/Divider';
import { MovieIcon, RateIcon } from '../../../assets/icons/Icons';

const SerieSubInfo = ({serie}) => {
    return (
        <div className="movie__subInfo  ">
          <span className="  ">{serie.first_air_date.slice(0, 4)}</span>
          {/* año de pelicula */}
    
          <Divider />
    
          <div className="flex gap-1  items-center capitalize">
            <MovieIcon />
            <span>Serie</span>
          </div>
    
          <Divider />
    
          <div className="gap-[1px] flex items-center   ">
            {" "}
            <span>{Math.round(serie.vote_average * 10) / 10} </span>
            {/* Rating */}
            <RateIcon />
          </div>
        </div>
      );
}

export default SerieSubInfo