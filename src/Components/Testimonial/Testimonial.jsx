import React from 'react'
import './testimonial.css'
import avatar from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import shifat from '../../assets/shifat.jpg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
const data = [
  {
    avatar: shifat,
    name: 'solaiman hossain shifat',
    review: "Great experience and a great product/service. I would return any day because of this project and their kind team. "
  },
  {
    avatar: shifat,
    name: 'solaiman hossain shifat',
    review: "Great experience and a great product/service. I would return any day because of this project and their kind team."
  },
  {
    avatar: shifat,
    name: 'solaiman hossain shifat',
    review: "Great experience and a great product/service. I would return any day because of this project and their kind team."
  },
  {
    avatar: shifat,
    name: 'solaiman hossain shifat',
    review: "Great experience and a great product/service. I would return any day because of this project and their kind team."
  }
]

  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial_container"
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name, review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className='client_name'> {name}</h5>
                <small>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial