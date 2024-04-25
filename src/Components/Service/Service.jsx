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
              <p>User-Centered Design Approach.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Customization.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Responsive Design.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Visual Consistency.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Accessibility.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Prototyping and Testing.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Scalability and Future-Proofing.</p>
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
              <p>Full-Stack Expertise.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Customized Solutions.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Real-Time Data Handling.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Scalability and Performance.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Responsive Design.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>RESTful API Development.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Database Management.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Continuous Integration and Deployment.</p>
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
              <p>Comprehensive Strategy Development.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Multi-Channel Approach.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Data-Driven Decision Making.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Content Creation and Optimization.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Audience Targeting and Personalization.</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Conversion Rate Optimization (CRO).</p>
            </li>
            <li>
              <FaRegCheckCircle  className='service_icon'/>
              <p>Performance Tracking and Reporting.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service