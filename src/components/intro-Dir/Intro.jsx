import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import samres from '../../.././Resume.pdf'

function Intro() {
  return <>
  <section id="intro">

          <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Samuvel</span><br/>MERN Stack Developer</span>
            <p className="introPara">
            I am a skilled and passionate web designer with experience in creating <br className='minus'/>visually appealing and user-friendly websites.
            </p>
            <span><a href={samres} target='blank'><button className="resumeBtn">Resume</button></a></span>
          </div>
     
              <img src={bg} alt="Profile" className="bg" />
      
    
  </section>
  </>
}

export default Intro