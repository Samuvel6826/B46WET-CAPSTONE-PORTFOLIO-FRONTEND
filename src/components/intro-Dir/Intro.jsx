import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import samres from '../../.././Resume.pdf'

function Intro() {
  return (
		<>
			<section id="intro">
				<div className="introContent">
					<h6 className="hello">Hello!👋🏻</h6>
					<h3 className="introText">
						I'm <span className="introName">Samuvel</span>
						<br />
						MERN Stack Web Developer
					</h3>
					<p className="introPara">
						I am a skilled and passionate web designer (Beginner) experience in creating <br className="minus" />visually appealing and user-friendly websites and I'm from Tamil Nadu, India. I have a tremendous passion to continually learn and acquire knowledge in Web Development technologies and processes. I will love to hear from you. Whether it's a Project, Job opportunity, or just a chat. Feel free to Contact me.

						{/* <p>
						I am a Full-Stack Developer with a great extent of knowledge in web development technologies and processes. I have a tremendous passion to continually learn and aim to ship neat and modern code that solve everyday problems, while incorporating my past experience in the Blue-Collar workforfree which helped instill a diligent work ethic, resourcefulness, and communication skills that I have taken with me into the coding world.
						</p> */}
					</p>
					<hr />
					
						<div className="introbtnCtn">

							
						<Link to='projects' spy={true} smooth={true} offset={-80} duration={25}>
							<button className="desktopMenuBtn" onClick={()=>{document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}}>
								<img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3"/>My Works
							</button>
						</Link>

							<button className="desktopMenuBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}}>
								<img width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>Hire Me
							</button>
						</div>
				</div>

				<div className="dp">
					<div className="flip-dp-inner">
						<div className="flip-dp-front">
							<img
                				className='dp-Pic'
								src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
								alt="Avatar"
							/>
						</div>
						<div className="flip-dp-back">
							<img
                				className='dp-Pic'
								src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704032039/IMG20221229121236-modified_1_v2excd.png"
								alt="Avatar"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro