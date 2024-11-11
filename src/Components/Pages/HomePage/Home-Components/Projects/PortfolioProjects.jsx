import { Col,Row } from "react-bootstrap";

import Projects from "./../Projects/Project-Components/Projects";

import './../../../../Styles/Portfolio-Styles/ProjectsStyles.css';

const PortfolioProjects = () => {


  return (
    <>
      <div id="projects-container" className="m-sm-1 m-md-2 m-lg-4 m-xl-5 m-xxl-5 container-fluid-center">

        <div className="mb-2 mt-5 text-center">
          <h2>Featured Projects</h2>
        </div>

        <Row> 
          <Col>
            <Projects/>
          </Col>
        </Row>

      </div>

    </>
  )
};

export default PortfolioProjects;