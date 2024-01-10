import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";

const Header = () => {
  const [relatedMovies, setRelatedMovie] = useState([]);
  useEffect(() => {
    getRelatedMovie();
  }, []);
  const getRelatedMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e6daa7add9e2ff1a8e7eb8ca4195e71c"
    );
    const data = await response.json();
    setRelatedMovie(data.results);
  };
  return (
    <section className="h-screen w-full">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return <HeaderCard key={movie.id} movie={movie} />;
        })}
      </Splide>
    </section>
  );
};

export default Header;
