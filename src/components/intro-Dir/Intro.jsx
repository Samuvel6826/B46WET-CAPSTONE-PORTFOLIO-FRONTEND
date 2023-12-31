import React from 'react'
import './intro.css'
import samres from '../../.././Resume.pdf'

function Intro() {
  return <>
  <section id="intro">

          <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Samuvel</span><br/>MERN Stack Web Developer</span>
            <p className="introPara">
            I am a skilled and passionate web designer with experience in creating <br className='minus'/>visually appealing and user-friendly websites.
            </p>
            <span><a href={samres} target='blank'><button className="resumeBtn">Resume</button></a></span>
          </div>
     
          {/* <div > */}
            {/* <img src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704032039/IMG20221229121236-modified_1_v2excd.png" alt="" /> */}
            <img className='bg' src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704034551/WhatsApp_Image_2023-12-31_at_20.12.35-modified_efzw1j.png" alt="" />
          {/* </div> */}
          {/* https://res.cloudinary.com/dgsucveh2/image/upload/v1704032039/IMG20221229121236-modified_1_v2excd.png */}
              {/* https://res.cloudinary.com/dgsucveh2/image/upload/v1704034551/WhatsApp_Image_2023-12-31_at_20.12.35-modified_efzw1j.png */}
  </section>
  </>
}

export default Intro