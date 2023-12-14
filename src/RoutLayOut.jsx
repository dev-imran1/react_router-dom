import React from 'react'
import Nav from './pages/navbar/Nav'
import Footer from './pages/footer/Footer'
import { Outlet } from 'react-router-dom'

const RoutLayOut = () => {
  return (
    <>
    <Nav />
        <Outlet />
    <Footer />
    </>
  )
}

export default RoutLayOut