import React from 'react'
import './About.css'
import me from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about_card'>
              <RiUserStarFill className='about_icon' />
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article className='about_card'>
              <CiFolderOn className='about_icon' />
              <h5>Projects</h5>
              <small> 150+ projects </small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem assumenda neque nihil quidem. Ducimus, aliquam ea harum consectetur, repellendus, recusandae nulla deserunt id magnam accusantium pariatur architecto tempora facere aspernatur!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About