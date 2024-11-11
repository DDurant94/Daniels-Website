import { ListGroup, Row, Col} from "react-bootstrap";

const Backend = () =>{

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
      <div id="backend-skills-container" className="container-fluid-center">

        <h2 id="backend-skills-title" className="ms-3 mb-3">Backend Development</h2>
        
        <div id="backend-skills-list-container" className="text-center">
          <ListGroup id="skills-list" className="p-4 shadow-lg">
            <ListGroup.Item id="skill-list-item">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Python</ListGroup.Item>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} YAML</ListGroup.Item>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} JSON</ListGroup.Item>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item id="skill-list-item">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} GraphQL</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Git</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} PowerShell</ListGroup.Item>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item  id="skill-list-item">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} SQL</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Flask</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} RESTful APIs</ListGroup.Item>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item id="skill-list-item">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} API Security</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Websocket</ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <ListGroup.Item id="skill-list-item">{checkIcon} Data Structures</ListGroup.Item>
                </Col>
              </Row>
            </ListGroup.Item>
            
          </ListGroup>

        </div>

      </div>
    </>
  );
};

export default Backend;