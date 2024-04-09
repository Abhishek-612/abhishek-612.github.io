import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<br></br><br></br>
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./sbu.jpeg"
								alt="Stony Brook University"
								className="work-image"
							/>
							<div className="work-title">Stony Brook University</div>
								<div className="work-details">
									<div className="work-subtitle">
										<strong>Research Assistant - Operating Systems</strong>
									</div>
									<div className="work-duration">May 2023 - Present</div>
									<div className="work-description">
										<ul>
											<li>Designed an AFL based TrustZone kernel fuzzer for the secure world in ARM Trusted Execution Environment.</li>
											<li>Built custom Trusted Applications in C, for OPTEE and tested buffer overflow vulnerabilities using address sanitizers.</li>
											<li>Analyzed kernel image binaries using Angr.io and Ghidra, and studied the kernel MMU configuration.</li>
										</ul>
									</div>
								</div>
						</div>
						<div className="work">
							<img
								src="./eyecandologo.png"
								alt="EyeCanDo - Stony Brook University"
								className="work-image"
							/>
							<div className="work-title">EyeCanDo - Stony Brook University</div>
								<div className="work-details">
									<div className="work-subtitle">
										<strong>Research Assistant - Eye tracking (HCI)</strong>
									</div>
									<div className="work-duration">Jan. 2023 - Dec. 2023</div>
									<div className="work-description">
										<ul>
											<li>Improved EyeCanDo iOS app’s eye tracking calibration by 56% with ARKit and OpenCV for homography.</li>
											<li>Performed extensive task-based trials in controlled environments with volunteer patients diagnosed with ALS.</li>
											<li>Trained BERT and T5 LLMs on distributed GPU clusters for phrase-level gesture typing using CUDA.</li>
										</ul>
									</div>
								</div>
						</div>
						<div className="work">
							<img
								src="./BNP-Paribas-SA.png"
								alt="BNP Paribas"
								className="work-image"
							/>
							<div className="work-title">BNP Paribas</div>
								<div className="work-details">
									<div className="work-subtitle">
										<strong>Software Engineer</strong>
									</div>
									<div className="work-duration">June 2021 - June 2022</div>
									<div className="work-description">
										<ul>
											<li>Led critical updates for On-demand Cash Pooling service using Java, Spring boot and UNIX jobs.</li>
											<li>Enhanced interest consolidation strategy for 8 enterprise clients valued at over ¥10M, by integrating lending/borrowing limits and automated reporting with secure email notification.</li>
											<li>Initiated effective risk mitigation to attain a 1-week incident resolution and patch delivery in the Apache Log4j crisis.</li>
											<li>Created UNIX jobs for file structuring and SHA-256 validation, cutting human error and packaging time by 75%.</li>
											<li>Adopted Agile workflow for project updates, business communication and roadmap and provided round-the-clock Level 3 support for production incidents and data patch requests.</li>
										</ul>
									</div>
									<br></br><br></br>
									<br></br><br></br>
									<br></br><br></br>
									<br></br><br></br>
									<br></br>
									<div className="work-subtitle">
										<strong>Software Development Intern</strong>
									</div>
									<div className="work-duration">Jan. 2021 - June 2021</div>
									<div className="work-description">
										<ul>
											<li>Designed data handling REST APIs in Java for data cleaning, constraint validation, transformation and database persistence.</li>
											<li>Developed migration & structure validation scripts for 400+ tables in JGestab, supporting form integrity across BNPP’s network.</li>
											<li>Automated business rule integration testing using Java-Selenium to validate online forms for JGestab.</li>
										</ul>
									</div>
								</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
