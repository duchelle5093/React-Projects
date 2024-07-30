import React from 'react'
import './Testimonials.css'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'







const Testimonials = () => {

  return (
    <div className='testimonials' id='testimonials'>
        <div className="slider">
            <ul className='caroussel'>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et enim a architecto eius minus suscipit recusandae quas eos modi, accusantium voluptate impedit nulla, eveniet iure reiciendis commodi ratione vel.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et enim a architecto eius minus suscipit recusandae quas eos modi, accusantium voluptate impedit nulla, eveniet iure reiciendis commodi ratione vel.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et enim a architecto eius minus suscipit recusandae quas eos modi, accusantium voluptate impedit nulla, eveniet iure reiciendis commodi ratione vel.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et enim a architecto eius minus suscipit recusandae quas eos modi, accusantium voluptate impedit nulla, eveniet iure reiciendis commodi ratione vel.</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials
