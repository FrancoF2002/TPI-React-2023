import Divider from "../../shared/Divider";
import { MovieIcon, RateIcon } from "../../../assets/icons/Icons";

const MovieSubInfo = ({ movie }) => {
  return (
    <div className="movie__subInfo  ">
      <span className="  ">{movie.release_date.slice(0, 4)}</span>

      <Divider />

      <div className="flex gap-1  items-center capitalize">
        <MovieIcon />
        <span>{movie.media_type}</span>
      </div>

      <Divider />

      <div className="gap-[1px] flex items-center   ">
        {" "}
        <span>{Math.round(movie.vote_average * 10) / 10} </span>
        <RateIcon />
      </div>
    </div>
  );
};
export default MovieSubInfo;
