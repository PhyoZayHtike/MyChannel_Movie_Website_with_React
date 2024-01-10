import React from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

function Popular() {
  return (
    <div>
        <Header/>
        <CardContainer title={"Popular Now"} url={'https://api.themoviedb.org/3/movie/popular?api_key=e6daa7add9e2ff1a8e7eb8ca4195e71c'}/>
    </div>
  )
}

export default Popular