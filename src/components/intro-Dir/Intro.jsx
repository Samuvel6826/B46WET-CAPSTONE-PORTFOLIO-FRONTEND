import React from 'react'
import './intro.css'
import samres from '../../.././Resume.pdf'

function Intro() {
  return (
		<>
			<section id="intro">
				<div className="introContent">
					<span className="hello">Hello!</span>
					<span className="introText">
						I'm <span className="introName">Samuvel</span>
						<br />
						MERN Stack Web Developer
					</span>
					<p className="introPara">
						I am a skilled and passionate web designer with experience in creating 
						<br className="minus" />
						visually appealing and user-friendly websites based in Tamil Nadu, India. I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.
					</p>
					<span>
						<a href={samres} target="blank" className='resumeBtnLink'>
							<button className="resumeBtn">Resume</button>
						</a>
					</span>
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