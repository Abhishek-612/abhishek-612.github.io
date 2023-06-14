import React from "react";

import Research from "./research";

import INFO from "../../data/user";

import "./styles/allResearch.css";

const AllResearch = () => {
	return (
		<div className="all-research-container">
			{INFO.research.map((project, index) => (
				<div className="all-research-project" key={index}>
					<Research
                        logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						conference={project.conference}
						publishDate={project.publishDate}
						cites={project.cites}
						award={project.award}
					/>
				</div>
			))}
		</div>
	);
};

export default AllResearch;
