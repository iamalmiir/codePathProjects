import React from 'react'
import './Card.css'

const Card = ({ img, title, description, link }) => {
  return (
    <div id='container'>
      <div className='card'>
        <img src={img} alt='Lago di Braies' />
        <div class='card_details'>
          <div class='title'>{title}</div>

          <p>{description}</p>

          <a src={link} target='_blank'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
