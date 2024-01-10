import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PopularCard from '../components/PopularCard';

function Searched() {
    const {title} = useParams()
    const [searchMovies,setMovie] = useState([]);

    const getSearchMovie = async() => {
     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6daa7add9e2ff1a8e7eb8ca4195e71c&query=${title}&page=1&include_adult=false
     `)
     const data = await response.json()
     setMovie(data.results)
    }

    useEffect(()=>{
     getSearchMovie()
    },[title])
  return (
    <div>
        <section className='px-4 lg:px-8 my-10'>
  <h1 className='text-4xl font-bold text-mono text-white'>Search result for {title}</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-4'>
    {
      searchMovies.length && searchMovies.map((movie) => {
        return (
          <PopularCard key={movie.id} movie={movie} />
        )
      })
    }
  </div>
</section>
    </div>
  )
}

export default Searched