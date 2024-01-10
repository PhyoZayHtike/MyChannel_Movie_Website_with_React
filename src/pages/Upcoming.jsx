import React from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

function Upcoming() {
  return (
    <div>
        <Header/>
        <CardContainer title={'Upcoming Movies'} url={'https://api.themoviedb.org/3/movie/upcoming?api_key=72a814220967e9899c058deb9f37ed4a'}/>
    </div>
  )
}

export default Upcoming