import Education from "./../AboutMe/AboutMe-Components/AboutMeEducation";
import Experience from "./../AboutMe/AboutMe-Components/AboutMeExperience";
import AboutMeIcons from "./../AboutMe/AboutMe-Components/AboutMeLogo";

import "./../../../../Styles/AboutMe-Styles/AboutMeStyles.css";

import { Col,Row } from "react-bootstrap";


const AboutMe = () => {

  return (
    <>
      <section id="about-me-section" className="mx-5">

        <div id="about-me-header-container" className="text-center mt-4">
          <div id="about-me-header-title-container">
            <h2 className="fs-1">Behind the Code</h2>
          </div>

          <div id="about-me-header-body-text-container">
            <p className="fs-4">Daniel&apos;s Source Code</p>
          </div>

        </div>

        <Row>

          <Col xs={12} sm={12} md={12} lg={4} className="mb-5 shadow-lg" id="about-me-col-edu">
            <Education/>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} className="mb-5" id="about-me-col-logo">
            <AboutMeIcons/>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} className="mb-5 shadow-lg" id="about-me-col-xp">
            <Experience/>
          </Col>
        
        </Row>

        <div id="about-me-text-container" className="container-fluid-center mx-sm-1 mx-md-1 mx-lg-5 mx-xl-5 mx-xxl-5 p-2 mb-4">
          <p>
            I am a dedicated and results-driven professional with a background in Agricultural Management and a strong interest in technology. Driven by a passion for learning, I consistently enhance my coding skills and stay updated with the latest industry trends. Known for my ability to remain calm under pressure and work effectively in a team, I have a passion for understanding how different components fit together within a larger system. As a detail-oriented and technical thinker with a knack for problem-solving, I strive to find efficient and innovative solutions.
          </p>
        </div>
      </section>

    </>
  )
};

export default AboutMe;