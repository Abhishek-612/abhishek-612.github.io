import React from "react";
import Project from "./project"; 
import Carousel from "./Carousel";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Project
        logo={project.logo}
        title={project.title}
        description={project.description}
        linkText={project.linkText}
        link={project.link}
        ongoing={project.ongoing}
      />
    </div>
  );
};

const AllProjects = ({ setCarousel }) => {
  let cards = INFO.projects.map((project, index) => ({
    key: index,
    content: <ProjectCard project={project} />
  }));

  if (setCarousel) {
    return (
      <div className="all-projects-container">
        <Carousel
          cards={cards}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={3}
          showArrows={false}
        />
      </div>
    );
  } else {
    return (
      <div className="all-projects-container">
        {INFO.projects.map((project, index) => (
          <div className="all-projects-project" key={index}>
            <Project
				logo={project.logo}
				title={project.title}
				description={project.description}
				linkText={project.linkText}
				link={project.link}
				ongoing={project.ongoing}
			/>
          </div>
        ))}
      </div>
    );
  }
};

export default AllProjects;
