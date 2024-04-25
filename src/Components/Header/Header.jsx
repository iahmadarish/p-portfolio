import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import h2 from '../../assets/2ishaq.png'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ahmad Ishaq</h1>
        <h4 className="text-light">Full Stack Developer </h4>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={h2} className='imagestyle' alt="" />
        </div>
        <a href="#Contact" className='scroll_down'>Scroll Dowan</a>
      </div>
    </header>
  )
}

export default Header