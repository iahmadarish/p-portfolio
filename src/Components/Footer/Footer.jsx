import React from 'react'
import './Footer.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> ISHAQ</a>
          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer_social">
            <a href="https://www.facebook.com/ishaqmoonira/"><FaFacebook /></a>
            <a href="https://www.facebook.com/ishaqmoonira/"><FaInstagram /></a>
            <a href="https://www.facebook.com/ishaqmoonira/"><FaLinkedin /></a>
          </div>
          <div className="footer_copyright">
            <small>All right reserve by ishaq</small>
          </div>
    </footer>

  )
}

export default Footer