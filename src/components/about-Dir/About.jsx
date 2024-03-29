// import React from 'react'
import './about.css'

function About() {
  return <>
      <section id="about">
        <h1 className="aboutTitle">About/Skills</h1>
        <div className="aboutContainer">
        <h2 className="aboutDesc">
        I&apos;m a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, Javascript and mentioned below Tech Stack...
        </h2>

        <div className="skillsContainer">

          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target='blank'><img title='HTML' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='blank'><img title='CSS' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='blank'><img title='Javascript' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/></a>

          <a href="https://react.dev/" target='blank'><img title='React' className='skillsImg' width="45" height="45" src="https://img.icons8.com/officel/80/000000/react.png" alt="react"/></a>

         <a href="https://nodejs.org/docs/latest/api/" target='blank'><img title='Node.js' className='skillsImg' width="60" height="60" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/></a>

          <a href="https://expressjs.com/" target='blank'><img title='Express-Node.js' className='skillsImg' width="48" height="48" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/></a>

          <a href="https://www.mysql.com/downloads/" target='blank'><img title='MySQL' className='skillsImg' width="60" height="60" src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="mysql-logo"/></a>

          <a href="https://www.mongodb.com/" target='blank'><img title='MongoDB' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/></a>

          <a href="https://mongoosejs.com/" target='blank'><img title='Mangoose' className='skillsImg' width="62" height="62" src="https://img.icons8.com/color/48/mongoose.png" alt="mongoose"/></a>
          
          <a href="https://getbootstrap.com/" target='blank'><img title='Bootstrap' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap"/></a>

          <a href="https://tailwindcss.com/" target='blank'><img title='Tailwind CSS' className='skillsImg' width="48" height="48" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/></a>

          <a href="https://github.com/Samuvel6826" target='blank'><img title='GitHub' className='skillsImg' width="48" height="48" src="https://res.cloudinary.com/dgsucveh2/image/upload/v1705581039/github-mark_iq2coy.png" alt="github"/></a>

          <a href="https://git-scm.com/" target='blank'><img title='Git' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/></a>
          
          <a href="https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3" target='blank'><img title='aws' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="aws"/></a>

        </div>
        </div>
      </section>
  </>
}

export default About