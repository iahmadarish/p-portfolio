import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import './Service.css'
const Service = () => {
  return (
    <section id='service'>
      <h5>What i offer</h5>
      <h2>Service</h2>
      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI DESIGN</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI  */}
        <article className='service'>
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className='service'>
          <div className="service_head">
            <h3>DIGITAL MARKETING</h3>
          </div>
          <ul className='service_list'>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service