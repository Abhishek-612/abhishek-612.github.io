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
										Want more details? 
									</div>
									<div className="subtitle about-subtitle">
										Find my resume below for more information:
									</div>
									<ul>
										<li 
											style={{
											paddingTop: '10px' }}>
										<a
											href="%PUBLIC_URL%/resume_sde.html"
											target="_blank"
											rel="noreferrer"
											style={{textDecoration: 'none', 
											color: 'var(--secondary-color)',
											fontWeight: 'bold', }}
										>
											Software Development Resume
										</a>
										</li>
									<li 
										style={{
										paddingTop: '20px' }}>
									<a
										href="%PUBLIC_URL%/resume_ds.html"
										target="_blank"
										rel="noreferrer"
										style={{textDecoration: 'none', 
										color: 'var(--secondary-color)',
										fontWeight: 'bold', }}
									>
										Data Science / Machine Learning Resume
									</a>
									</li>
									</ul>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
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
