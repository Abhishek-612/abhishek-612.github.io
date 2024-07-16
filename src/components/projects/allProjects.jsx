import React from "react";

import Project from "./project";
import Carousel from "./Carousel";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {

	let cards = INFO.projects.map((project, index) => ({
		key: index,
		content: <div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						ongoing={project.ongoing}
					/>
				</div>
	  }));

	return (
		<div className="all-projects-container">
			<Carousel
				cards={cards}
				height="450px"
				width="80%"
				margin="0 auto"
				offset={3}
				showArrows={false}
			/>
		</div>
	);
};

export default AllProjects;
