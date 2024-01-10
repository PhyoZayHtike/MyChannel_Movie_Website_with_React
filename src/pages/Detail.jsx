import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, [id]);
  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e6daa7add9e2ff1a8e7eb8ca4195e71c`
    );
    const data = await response.json();
    setMovie(data);
  };
  return (
    <section>
      {movie && (
        <>
          <div className="flex flex-col lg:flex-row bg-gray-800 p-8 rounded-md shadow-lg lg:h-screen">
            {movie.poster_path && (
              <img
                className="lg:w-64 lg:h-96 mb-4 lg:mr-8 rounded-md"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-white">
                {movie.title}
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500">
                  &#9733; {movie.vote_average}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-300">{movie.runtime} min</span>
              </div>
              <p className="text-white mt-4">{movie.overview}</p>
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-white">
                  Additional Details
                </h2>
                <ul className="text-gray-300 list-disc pl-6 mt-2">
                  {movie.genres &&
                    Array.isArray(movie.genres) &&
                    movie.genres.length > 0 && (
                      <li>
                        <span className="font-semibold">Genre:</span>{" "}
                        {movie.genres.map((genre) => genre.name).join(", ")}
                      </li>
                    )}
                  <li>
                    <span className="font-semibold">Original Language:</span>{" "}
                    {movie.original_language}
                  </li>
                  <li>
                    <span className="font-semibold">Release Status:</span>{" "}
                    {movie.status}
                  </li>
                </ul>
              </div>
              <Link to={movie.homepage}>
              <button className="bg-transparent hover:bg-red-700 border border-red-500 text-white px-6 py-3 rounded-md mt-3 font-semibold flex items-center">
                <PlayIcon className="w-6 h-6 mr-2 text-red-500" />
                Watch Now
              </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Detail;
