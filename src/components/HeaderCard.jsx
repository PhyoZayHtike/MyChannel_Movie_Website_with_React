import {PlayCircleIcon} from '@heroicons/react/24/solid'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from 'react-router-dom';

const HeaderCard = ({ movie }) => {
  return (
    <SplideSlide>
     <div className="w-full h-screen relative">
  <img
    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    alt={movie.title}
    className="w-full h-full object-cover"
  />
  <div className="dark-ov"></div>
  <div className="text-box absolute bottom-0 left-0 p-4 text-white">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3">
      {movie.title}
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl font-medium">
      {movie.overview}
    </p>
    <Link to={`/details/${movie.id}`}>
    <button className="bg-white text-black px-3 py-2 rounded-md font-medium text-base sm:text-lg mt-4">
      <PlayCircleIcon className="w-6 h-6 inline-block m-0 me-2" />
      Watch Now
    </button>
    </Link>
  </div>
</div>
    </SplideSlide>
  );
};

export default HeaderCard;
