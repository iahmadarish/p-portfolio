import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio (1).png'
import img2 from '../../assets/portfolio (2).png'
import img3 from '../../assets/portfolio (3).png'
import img4 from '../../assets/portfolio (4).png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: 'Petroil for Gash and fuel',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    },
    {
      id: 2,
      image: img2,
      title: 'Travel Agency & tour',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    },
    {
      id: 3,
      image: img3,
      title: 'e-Commerce',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    },
    {
      id: 4,
      image: img4,
      title: 'Chatting Application',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    },
    {
      id: 5,
      image: img2,
      title: 'website title here',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    },
    {
      id: 6,
      image: img1,
      title: 'website title here',
      github: 'https://github.com',
      demo: 'https://h2-o-chi.vercel.app/'
    }
  ]



  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} className='btn btn_primary' target='_blank'>Live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio