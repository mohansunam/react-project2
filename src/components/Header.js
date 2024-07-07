import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to = 'about-page'>About</NavLink>
      <NavLink to = 'contact-page'>Contact</NavLink>
  
     
      
    </div>
  ) 
}

export default Header


