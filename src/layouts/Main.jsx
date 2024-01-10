import React from 'react'
import Nav from '../components/Nav'
import { Route, Routes } from 'react-router-dom'
import Popular from '../pages/Popular'
import Upcoming from '../pages/Upcoming'
import Detail from '../pages/Detail'
import Searched from '../pages/Searched'

function Main() {
  return (
    <section>
       <Nav/>
      <Routes>
        <Route index element={<Popular/>}/>
        <Route element={<Upcoming/>} path='/upcoming'/>
        <Route element={<Detail/>} path='/details/:id'/>
        <Route element={<Searched/>} path='/search/:title'/>
      </Routes>
    </section>
  )
}

export default Main