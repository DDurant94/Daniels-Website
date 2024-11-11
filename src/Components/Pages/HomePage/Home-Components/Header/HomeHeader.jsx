import { motion } from "framer-motion";
import { Button, Col, Row} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

import ProfilePicture from "./../../../../../Assets/Pictures/ProfilePictures/ProfilePicture.jpg";
import ProfilePicture2 from "./../../../../../Assets/Pictures/ProfilePictures/ProfilePicture2.jpg";

import "./../../../../Styles/Header-Styles/HeaderStyles.css"

const HomeHeader = () => {
  const handleResumeClick = () => {
    const resumeUrl = "public/Assets/Resume/DanielDurantResume.pdf";
    window.open(resumeUrl, "_blank");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "DanielDurantResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return(

    <>

      <header id="home-header" className="container-fluid-center mb-5">

        <Row className="container-fluid-center mb-5">

          <Col className="mb-5 d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={6}>
            <div id="profile-picture-container" className="swirl-border">
              <img src={ProfilePicture2} alt={ProfilePicture} className="img-fluid mx-auto d-block rounded-circle shadow" style={{maxHeight:"600px"}}></img>
            </div>
          </Col>

          <Col className="mb-5 mt-5" xs={12} sm={6} md={6} lg={6}>

          <motion.div id="home-header-wrapper" className="text-center mb-5">

            <div id="title-container" className="mt-lg-5">
              <h1>Hello, I'm Daniel Durant</h1>
            </div>

            <div id="header-p-container">
              <p>Full Stack Software Engineer</p>
            </div>

          </motion.div>

          <div className="d-flex justify-content-around mt-3">
            <Row className="container-fluid-center">
              <Col xs={6} sm={6} md={6} lg={6}>
              <Button className="shadow" id="header-bttns" onClick={handleResumeClick}>
                    <lord-icon
                      src="https://cdn.lordicon.com/ictzmbek.json"
                      trigger="hover"
                      state="hover-unfold"
                      colors="primary:#dad7cd,secondary:#588157"
                      style={{ width: "6rem", height: "2.5rem" }}>
                    </lord-icon>
                  </Button>
              </Col>

              <Col xs={6} sm={6} md={6} lg={6}>
                  <Link to="contact-me" smooth={true} duration={300}>
                    <Button className="shadow" id="header-bttns">
                      <lord-icon
                          src="https://cdn.lordicon.com/tzdzfcda.json"
                          trigger="hover"  
                          colors="primary:#dad7cd,secondary:#588157"
                          style={{width:"6rem",height:"2.5rem"}}>
                      </lord-icon>
                    </Button>
                  </Link>
              </Col>
            </Row>

          </div>

          <motion.div animate={{x:9}} initial={{x:300}} className="d-flex justify-content-around mt-3">

            <Row>
              <Col className="fs-2">

                <a href="https://github.com/DDurant94" id="header-links"><i className="bi bi-github"></i></a>
              </Col>

              <Col className="fs-2">
                <a href="https://www.linkedin.com/in/daniel-durant-30a0252b9/" id="header-links"><i className="fa fa-linkedin-square"></i></a>
              </Col>

            </Row>

          </motion.div>
          
          </Col>
        </Row>

      </header>

    </>
  );

};

export default HomeHeader;

