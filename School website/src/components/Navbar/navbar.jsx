import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import menu_icon from '../../assets/images/menu-icon.png'



const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    useEffect (() => {
        window.addEventListener('scroll', () =>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false): setMobileMenu(true)
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '' : 'hide-menu'}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#campus">Campus</a></li>
            <li><a href="#testimonials">Testimonals</a></li>
            <li><button className='btn' href='#contact'><a href="#contact">Conatct Us</a></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar