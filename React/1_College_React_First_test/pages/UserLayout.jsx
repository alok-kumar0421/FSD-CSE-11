import React from 'react'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        {/* <Home/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout