import { useEffect, useState } from "react";
import "./projects.css";
import Cards from "../Cards/Cards";
import axios from "axios";
import Spinner from "../Common-Stuffs/SpinnerComp";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	let getProjects = async () => {
		try {
			let res = await axios.get(
				`${"https://b46wet-capstone-portfolio-backend.onrender.com/users"}`
			);
			// console.log(res.data.data)
			setProjects(res.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getProjects();
	}, []);

	return (
		<>
			<section id="projects">
				<h1 className="projectsTitle">My Projects</h1>
				<div className="myProjects">
					{loading ? (
						<Spinner />
					) : (
						projects.map((e, i) => {
							return (
								<Cards
									key={i}
									id={e.id}
									imgUrl={e.imgUrl}
									name={e.name}
									description={e.description}
									siteLink={e.siteLink}
								/>
							);
						})
					)}
				</div>
				{/* <button className="seeBtn">See More</button> */}
			</section>
		</>
	);
}

export default Projects;