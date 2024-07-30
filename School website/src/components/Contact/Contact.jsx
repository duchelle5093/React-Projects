import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key","02aa8119-905a-4110-8515-7581257dd3ec");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, numquam consequatur fuga quasi officiis veritatis nostrum distinctio a. Consectetur tempora obcaecati cumque aspernatur rerum blanditiis.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contatc@duchelle.me</li>
            <li><img src={phone_icon} alt="" />652554446</li>
            <li><img src={location_icon} alt="" />Cameroun, yaounde, etoudi</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your  name' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
