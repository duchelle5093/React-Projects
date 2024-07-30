import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlay from './components/videoPlayer/VideoPlay'

const App = () => {

    const[playState , setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title
          title='our program'
          subTitle='What We Offer'
        />
        <Programs/>
        <About setPlayState = {setPlayState}/>
        <Title
          title='Gallery'
          subTitle='Campus photos'
        />
        <Campus/>
        <Title
          title='TESTIMONIALS'
          subTitle='What Students Says'
        />
        <Testimonials/>
        <Title
          title='Contact us'
          subTitle='Get in Touch'
        />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlay playState ={playState} setPlayState={setPlayState} />
    </div>

  )
}

export default App
