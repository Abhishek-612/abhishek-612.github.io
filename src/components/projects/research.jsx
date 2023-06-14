import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, } from "@fortawesome/free-solid-svg-icons";

import "./styles/research.css";

const Research = (props) => {
	const { title, description, linkText, link, conference, publishDate, cites, award } = props;

	return (
		<React.Fragment>
			<div className="research">
				<Link to={link}>
					<div className="research-container">
						<div className="conference-container">
							<div className="research-title">{title}</div>
							<div className="research-date">{publishDate}</div>
						</div>
						<div className="conference-title">{conference}</div>
						<div className="research-description">{description}</div>
						{ (award.length !== 0) ?
							<div className="research-award" >
								<strong>
									Awards: <span className="research-award" style={{color:'var(--link-color)'}}><strong>{award}</strong></span>
								</strong>
							</div> : null }
						<div className="cites-container" >
						<div className="research-link">
							<div className="research-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="research-link-text">{linkText}</div>
						</div>
						{ (cites > 0) ? <div className="research-cites">Cited by {cites}</div> : null }
						
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Research;
