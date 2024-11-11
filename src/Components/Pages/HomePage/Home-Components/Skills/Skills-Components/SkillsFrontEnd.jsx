import { ListGroup, Row, Col } from "react-bootstrap";

const Frontend = () =>{

  const checkIcon = 
    <lord-icon
        src="https://cdn.lordicon.com/vlrdqeoi.json"
        trigger="hover"
        state="hover-pinch"
        stroke="bold"
        colors="primary:#dad7cd,secondary:#a3b18a"
        style={{width:".85rem",height:".85rem"}}>
    </lord-icon>;

  return(
    <>
      <div id="frontend-skills-container" className="container-fluid-center">

        <h2 id="frontend-skills-title" className="ms-3 mb-3">Frontend Development</h2>

        <div id="frontend-skills-list-container" className="text-center">
          <ListGroup id="skills-list" className="p-4 shadow-lg">

          <ListGroup.Item id="skill-list-item">

              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} JavaScript</ListGroup.Item>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} TypeScript</ListGroup.Item>
                </Col>
              </Row>

            </ListGroup.Item>

            <ListGroup.Item  id="skill-list-item">

              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} HTML</ListGroup.Item>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} CSS</ListGroup.Item>
                </Col>
              </Row>

            </ListGroup.Item>

            <ListGroup.Item  id="skill-list-item">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} React</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Node.js</ListGroup.Item>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item  id="skill-list-item">

              <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Bootstrap</ListGroup.Item>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6}>
                  <ListGroup.Item id="skill-list-item"></ListGroup.Item>
                </Col>
              </Row>

            </ListGroup.Item>

          </ListGroup>
        </div>
      </div>
    
    </>
  );
};

export default Frontend;