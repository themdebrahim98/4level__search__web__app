import React from 'react'
import './card.css'

import profile1 from '../media/home1.jpeg'

export default function Card({ card__data }) {

  return (

    <>

      <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${card__data.image})` }}>

        </div>
        <div className="card__body">
          <div className="price">
            <h2>${card__data.price}</h2>
            <i>logo</i>
          </div>
          <div className="card__head">
            <h2>palm halder</h2>
            <p>{card__data.address}</p>
            <p>{card__data.date}  </p>
          </div>
        </div>
        <div className="card__fotter">
          <p> {card__data.beds} beds</p>
          <p>{card__data.bathroom} bathroom</p>
          <p>5x7m2</p>

        </div>
      </div>


    </>
  )
}
