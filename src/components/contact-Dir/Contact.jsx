import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6vosqm', 'template_y8grdsb', form.current, 'dsQNk0H0okAie8xT2')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
  return <>
  <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactPageDesc">
            Please fill out the form below to discuss any work opportunities.
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='your_name'/>
        <input type="email" className="email" placeholder='Your Email' name='your_email'/>
        <textarea name="message" id="" rows="5" className="msg" placeholder='Enter Tour Message'></textarea>
        <button type='submit' value='Send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={FacebookIcon} alt="Facebook" className="link" />
          <img src={TwitterIcon} alt="Twitter" className="link" />
          <img src={YoutubeIcon} alt="Youtube" className="link" />
          <img src={InstagramIcon} alt="Instagram" className="link" />
        </div>
      </form>
  </section>
  </>
}

export default Contact