import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/images/dark-arrow.png'



const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>We ensure better education for a batter world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and expriences needed to escel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
