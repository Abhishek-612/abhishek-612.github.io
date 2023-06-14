import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./BNP-Paribas-SA.png"
								alt="BNP Paribas"
								className="work-image"
							/>
							<div className="work-title">BNP Paribas</div>
								<div className="work-details">
									<div className="work-subtitle">
										Software Engineer
									</div>
									<div className="work-duration">June 2021 - June 2022</div>
									<br></br>
									<div className="work-subtitle">
										Software Development Intern
									</div>
									<div className="work-duration">Jan. 2021 - June 2021</div>
								</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
