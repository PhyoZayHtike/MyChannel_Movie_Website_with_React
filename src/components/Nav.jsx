import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const [searchKey,setSearchKey] = useState('')
  const navigate = useNavigate()
  const search = (e) => {
    e.preventDefault();
    if(!searchKey){
      navigate("/")
    }else{
      navigate(`/search/${searchKey}`)
    }
  }
  return (
    <nav className='flex flex-col lg:flex-row items-center justify-between bg-black text-white px-4 lg:px-10 py-4'>
    <h1 className='text-2xl lg:text-5xl font-bold font-mono mb-2 lg:mb-0'><span className='text-red-400'>My</span><span className='text-blue-100'>Channel</span></h1>
    <div className='flex items-center space-x-4 mt-4 lg:mt-0'>
      <NavLink to={'/'} className={({isActive}) => isActive ? "active-text" : "non-active"}>Popular</NavLink>
      <NavLink to={'/upcoming'} className={({isActive}) => isActive ? "active-text" : "non-active"}>Upcoming</NavLink>
    </div>
    <form onSubmit={search} className='flex items-center mt-4 lg:mt-0'>
      <input onChange={(e) => setSearchKey(e.target.value)} placeholder='Search movie' type="text" className='text-base lg:text-xl bg-transparent border-b border-b-slate-300 focus:outline-none'/>
      <button>
      <MagnifyingGlassIcon className='w-6 h-6'/>
      </button>
    </form>
  </nav>
  )
}

export default Nav 