import React from 'react'
import cv from '../../assets/ishaq.cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={cv} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Lets talk</a>
    </div>
  )
}

export default CTA