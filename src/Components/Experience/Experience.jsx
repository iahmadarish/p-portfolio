import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>JavaScript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>Next Js</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>Tailwinds</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>React</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        {/* end of frontend */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>Node js</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>MongoDB</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>My SQL</h4>
                <small className='text_light'>basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>Express js</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className= "experience_details-icon" />
              <div className="">
                <h4>Next js</h4>
                <small className='text_light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience