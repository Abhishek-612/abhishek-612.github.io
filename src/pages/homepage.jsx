import React from "react";
import { Helmet } from "react-helmet";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
  const { darkMode } = { darkMode: false };

  const currentSEO = SEO.find((item) => item.page === "home");


  const containerStyle = {
    background: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
      
        <div className="content-wrapper">

          <div className="homepage-container" style={containerStyle}>
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">{INFO.homepage.title}</div>
                <div className="subtitle homepage-subtitle">{INFO.homepage.description}</div>
              </div>

              <div className="homepage-first-area-right-side-container">
                <div className="homepage-first-area-right-side">
                  <div className="homepage-image-container">
                    <div className="homepage-image-wrapper">
                      <img src="display-pic.png" alt="about" className="homepage-image" />
                    </div>
                  </div>
                </div>

              <div className="homepage-socials">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
                </a>
                <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="homepage-social-icon" />
                </a>
                <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="homepage-social-icon" />
                </a>
              </div>
              </div>
            </div>


            <div className="homepage-works">
              <Works />
            </div>

            <div className="homepage-projects">
              <div className="homepage-subsubtitle">Projects</div>
              <AllProjects />
            </div>

            <div className="homepage-subsubtitle">Articles</div>
            <div className="homepage-after-title">
              <div className="homepage-articles">
                {myArticles.map((article, index) => (
                  <div className="homepage-article" key={(index + 1).toString()}>
                    <Article
                      key={(index + 1).toString()}
                      date={article().date}
                      title={article().title}
                      description={article().description}
                      link={"/article/" + (index + 1)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
