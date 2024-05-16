// import React from 'react'
import './about.css'

function About() {
  return <>
    <section id="about">
      <h1 className="aboutTitle">About/Skills</h1>

      <main className='aboutMain'>
        <div className="aboutContainer">
          <h2 className="aboutDesc">

            Welcome to my skills showcase! As a web developer, I Proficient in HTML, CSS, and JavaScript, I specialize in frontend development. Leveraging frameworks like Bootstrap and Tailwind CSS, I streamline the design process and deliver modern, responsive websites.

            In addition to my frontend proficiency, I'm well-versed in backend technologies, including Node.js, Express.js, and MongoDB. This enables me to develop robust and scalable web applications, handling everything from server-side logic to database management.

            Furthermore, I have extensive experience with version control systems like Git and GitHub, ensuring efficient collaboration and code management. Additionally, I'm adept at deploying projects using platforms such as Netlify, and Render, enabling seamless deployment of web applications. Please find below the list of skills I possess.
          </h2>
        </div>
        <div className="skillsContainer">

          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target='blank'><img title='HTML' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" /></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='blank'><img title='CSS' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" /></a>

          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='blank'><img title='Javascript' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" /></a>

          <a href="https://getbootstrap.com/" target='blank'><img title='Bootstrap' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap" /></a>

          <a href="https://tailwindcss.com/" target='blank'><img title='Tailwind CSS' className='skillsImg' width="48" height="48" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css" /></a>

          <a href="https://react.dev/" target='blank'><img title='React' className='skillsImg' width="45" height="45" src="https://img.icons8.com/officel/80/000000/react.png" alt="react" /></a>

          <a href="https://nodejs.org/docs/latest/api/" target='blank'><img title='Node.js' className='skillsImg' width="60" height="60" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs" /></a>

          <a href="https://expressjs.com/" target='blank'><img title='Express-Node.js' className='skillsImg' width="48" height="48" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js" /></a>

          <a href="https://www.mysql.com/downloads/" target='blank'><img title='MySQL' className='skillsImg' width="60" height="60" src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="mysql-logo" /></a>

          <a href="https://www.mongodb.com/" target='blank'><img title='MongoDB' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb" /></a>

          <a href="https://mongoosejs.com/" target='blank'><img title='Mangoose' className='skillsImg' width="62" height="62" src="https://img.icons8.com/color/48/mongoose.png" alt="mongoose" /></a>


          <a href="https://github.com/Samuvel6826" target='blank'><img title='GitHub' className='skillsImg' width="48" height="48" src="https://res.cloudinary.com/dgsucveh2/image/upload/v1705581039/github-mark_iq2coy.png" alt="github" /></a>

          <a href="https://git-scm.com/" target='blank'><img title='Git' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" /></a>

          <a href="https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3" target='blank'><img title='aws' className='skillsImg' width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="aws" /></a>

          <a href="https://surge.sh" target='blank'><img title='surge' className='skillsImg' width="48" height="48" src="https://surge.sh/images/logos/svg/surge-logo.svg" alt="surge" /></a>

          <a href="https://render.com" target='blank'><img title='render' className='skillsImg' width="48" height="48" src="https://media.licdn.com/dms/image/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/0/1702595267620/renderco_logo?e=1723075200&v=beta&t=hRST8MwdcWbWhduHqrz7zSOoG4T4wTo5ej7j_E4ipW0" alt="render" /></a>

          <a href="https://app.netlify.com" target='blank'><img title='netlify' className='skillsImg netlify' width="90" height="48" src="https://res.cloudinary.com/dgsucveh2/image/upload/v1714823239/Screenshot_2024-05-04_at_5.13.00_PM_ouxpj1.png" alt="netlify" /></a>

        </div>
      </main>
    </section>
  </>
}

export default About