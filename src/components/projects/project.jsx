import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, ongoing } = props;

	const handleClick = (e) => {
		const linkElement = e.target.innerHTML;
		if (linkElement.includes('<a')) {
		window.location.href = linkElement.match(/href="([^"]*)/)[1]; 
		}
	  };

	return (
		<React.Fragment>
			<div className="project" onClick={handleClick}>
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo-container" style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<div className="project-logo"  style={{marginLeft: '10px',}}>
								<img src={logo} alt="logo" />
							</div>
							{ ongoing ? <span style={{height: '20px', textDecoration: 'none', color: 'var(--secondary-color)'}}>Ongoing</span> : null}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
