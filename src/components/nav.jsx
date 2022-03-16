import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='Navbar'>
    <NavLink  className='navlinks' to={"/"}> <h1>Food Tracker</h1></NavLink> 
 
    <NavLink to={"/"} className='navlinks' >Profile</NavLink>
    <NavLink to={"/"} className='navlinks'>Your Diet</NavLink>
    
    </div>
  )
}

export default Nav