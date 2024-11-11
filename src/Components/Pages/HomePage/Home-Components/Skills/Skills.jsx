import Frontend from "./Skills-Components/SkillsFrontEnd";
import Backend from "./Skills-Components/SkillsBackend";

import "./../../../../Styles/Skills-Styles/SkillsStyles.css";

import { Col,Row } from "react-bootstrap";

const Skills = () => {
  
  return (
    <>
      <section id="skills-section" className="container-fluid-center m-5">

        <Row className="g-5">

          <Col>
            <Frontend/>
          </Col>

          <Col>
            <Backend/>
          </Col>
        
        </Row>

      </section>
      
    </>
  )
};

export default Skills;