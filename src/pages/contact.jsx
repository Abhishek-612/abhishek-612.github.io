import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Get in touch! Feel free to reach out and say hello, I'm just a message away.
						</div>

						<div className="subtitle contact-subtitle">
						I'm thrilled that you're interested in reaching out to me. You can find me on {" "}
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
						{" "} and {" "}
						<a
							href={INFO.socials.instagram}
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
						, where I'm always ready to connect with like-minded individuals. Alternatively, you can email me directly at {" "}
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
						{INFO.main.email}
						</a>
						. Whether you have feedback, questions, or just want to chat about exciting projects, I'm here to listen and engage. Let's dive into meaningful conversations and explore new possibilities together. Can't wait to hear from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
