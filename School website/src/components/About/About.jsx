import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.png'
import play_icon from '../../assets/images/play-icon.png'




const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{{setPlayState(true)}}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque quasi veritatis provident numquam laboriosam cum reprehenderit, unde modi et vitae fugit fugiat voluptatibus quidem architecto nostrum, placeat iste consequatur.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore deleniti sed placeat ut, fugit maxime vero architecto doloribus nam reiciendis quas dicta perspiciatis porro beatae dolor nostrum dolorem sit et.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea dolorem, mollitia sit cumque tempore modi voluptatem eligendi ut magnam sed nobis neque explicabo! Laudantium explicabo velit quidem facilis commodi.</p>
      </div>
    </div>
  )
}

export default About
