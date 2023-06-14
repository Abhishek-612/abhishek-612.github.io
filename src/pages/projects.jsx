import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import AllResearch from "../components/projects/allResearch";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects choreographed with passion, shaping my extraordinary journey.
						</div>

						<div className="subtitle projects-subtitle">
						Throughout my journey, I've embarked on diverse projects that I take immense pride in. Many of these ventures are open-source, inviting others to explore and contribute. I welcome you to delve into the code, share your insights, and join hands in our collaborative pursuit of growth and innovation. Together, we can create something extraordinary!
						</div>

						
						<div className="project-specific-subtitle">
							Featured Projects: 
						</div>

						</div>

						<div className="projects-list">
							<AllProjects />
						</div>

						<hr />
						<div className="research-specific-subtitle">
							Published Work on {" "}
							<a
								href={INFO.socials.scholar}
								target="_blank"
								rel="noreferrer"
								style={{textDecoration: 'none',
								color: 'var(--tertiary-color)' }}
							>Google Scholar</a>
						</div>

						<div className="research-list">
							<AllResearch />
						</div>


					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
