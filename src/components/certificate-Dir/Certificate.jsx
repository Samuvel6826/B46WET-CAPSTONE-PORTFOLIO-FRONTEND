import React from 'react'
import './certificate.css'

function Certificate() {
  return (
		<>
			<section id="certificate">
				<div className="certificateContainer">
					<div className="certificateBy">
						<a href="https://www.guvi.in/" target='blank'>
							<h1>GUVI Geek Networks, IITM Research Park</h1>
						</a>
						<h4>Reputed Edtech platform for Vernacular Languages. GUVI is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.</h4>
						<a href="https://www.guvi.in/ai-for-india/?utm_source=fntge&utm_medium=referral">My referral link</a>
					</div>
					<div className="certificateImg">
						<a href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#" target='blank'>
							<img
								src="https://res.cloudinary.com/dgsucveh2/image/upload/v1703076952/Sam_s_Full_Stack_Development_Certificate_by_GUVI_ljlvbm.jpg"
								alt="Certificate"
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
	
}

export default Certificate