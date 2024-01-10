import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function PopularCard({ movie }) {
  return (
    <Link
      to={`/details/${movie.id}`}
      className="rounded-lg overflow-hidden relative"
    >
      {movie.poster_path && (
        <img
          className="w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
        />
      )}

      <div className="dark-ov"></div>
      <PlayIcon className="play-ic" />
    </Link>
  );
}

export default PopularCard;
