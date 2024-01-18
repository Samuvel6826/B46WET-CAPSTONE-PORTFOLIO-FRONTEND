// import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'

function Intro() {
	return (
		<>
			<section id="intro">
				<div className="introContent">
					<h6 className="hello">Hello!👋🏻</h6>
					<h3 className="introText">
						I&apos;m <span className="introName">Samuvel</span>
						<br />
						MERN Stack Web Developer
					</h3>
					<p className="introPara">
						I am a skilled and passionate web developer (Beginner) based in Kanyakumari, Tamil Nadu, India. Experienced in creating visually appealing and user-friendly websites.<br className="minus" /><br className="minus" /> I love creating websites that look good and are easy to use. Whether it's making user-friendly designs or diving into backend development, I enjoy the challenge. <br className="minus" /><br className="minus" /> Let's connect and bring some color to the web! Feel free to drop me a line if you've got a cool project or job on the horizon, or if you're just up for a lively conversation about web development. I'm eager to hear from you!
					</p>
					<hr />

					<div className="introbtnCtn">
						<Link to='projects' spy={true} smooth={true} offset={-80} duration={25}>
							<button className="desktopMenuBtn" onClick={() => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}>
								<img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" />My Works
							</button>
						</Link>

						<button className="desktopMenuBtn" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
							<img width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />Hire Me
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