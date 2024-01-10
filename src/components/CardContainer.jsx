import React, { useEffect, useState } from 'react'
import PopularCard from './PopularCard'

function CardContainer({title,url}) {
    const [popularMovies,setPopulatMovie] = useState([])

    const getPopularMovie = async() => {
        const response = await fetch(url)
        const data = await response.json()
        setPopulatMovie(data.results)
    }

    useEffect(()=>{
       getPopularMovie()
    },[])
  return (
    <section className='px-4 lg:px-8 my-10'>
  <h1 className='text-4xl font-bold text-mono text-white'>{title}</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-4'>
    {
      popularMovies.length && popularMovies.map((movie) => {
        return (
          <PopularCard key={movie.id} movie={movie} />
        )
      })
    }
  </div>
</section>
  )
}

export default CardContainer