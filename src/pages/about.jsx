import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div>
									<div className="project-specific-subtitle">
										Looking to Collaborate?
									</div>
									<div className="subtitle about-subtitle">
										<p>Check out my resume for a better view of my skillset:</p>
									</div>
									<ul>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_sde_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Software Development (General) Resume
										</a>
										</li>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_fullstack_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Full Stack Development Resume
										</a>
										</li>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_ml_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Data Science & Machine Learning Resume
										</a>
										</li>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_ai_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											AI Applications Resume
										</a>
										</li>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_systems_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Systems Resume
										</a>
										</li>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="https://github.com/Abhishek-612/abhishek-612.github.io/raw/main/pdf/Abhishek_Revadekar_ios_resume.pdf"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Mobile Development - iOS Resume
										</a>
										</li>
									</ul>
									<div className="subtitle about-subtitle">
									<p><em>
										Note: My journey in software development is still unfolding, and my curiosity is ever-expanding. The various resume iterations you'll find here are purposefully tailored to showcase the breadth of my experience within specific domains. Each version is a reflection of my versatile skill set, adapted to meet the unique demands of the industry's diverse sectors.
									</em></p>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="abhishek photo.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
