import React, { useState } from 'react'
import './Nav.css'
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";
import { RiServiceFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}  className={activeNav === '#' ? 'active': ''}><IoMdHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><FaRegUser /></a>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''} ><LuBookMinus /></a>
      <a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active': ''} ><RiServiceFill  /></a>
      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><RiMessage3Fill /></a>
    </nav>
  )
}

export default Nav