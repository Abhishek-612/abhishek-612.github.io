import React, { useState } from "react";
import Project from "./project"; 
import Carousel from "./Carousel";
import INFO from "../../data/user";
import "./styles/allProjects.css";
import { tagColors } from "../../data/tags";


const CategoryFilter = ({ categories, currentCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <span
        className={`filter-tag ${currentCategory === "All" ? "active" : ""}`}
        onClick={() => onCategoryChange("All")}
      >
        All
      </span>
      {categories.map((category) => (
        <span
          key={category}
          className={`filter-tag ${currentCategory === category ? "active" : ""}`}
          style={{ backgroundColor: tagColors[category] || "gray" }}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};


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
        tags={project.tags} 
        category={project.category}
      />
    </div>
  );
};

const AllProjects = ({ setCarousel }) => {
  const [currentCategory, setCurrentCategory] = useState("All");

  let cards = INFO.projects.map((project, index) => ({
    key: index,
    content: <ProjectCard project={project} />
  }));

  const categories = [...new Set(INFO.projects.map((project) => project.category))];

  const filteredProjects = currentCategory === "All"
    ? INFO.projects
    : INFO.projects.filter((project) => project.category === currentCategory);

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
      <div>
        <CategoryFilter
          categories={categories}
          currentCategory={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
        <div className="all-projects-container">
          {filteredProjects.map((project, index) => (
            <div className="all-projects-project" key={index}>
              <Project
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
          ongoing={project.ongoing}
          tags={project.tags} 
          category={project.category}
        />
            </div>
          ))}
        </div>

      </div>
    );
  }
};

export default AllProjects;
