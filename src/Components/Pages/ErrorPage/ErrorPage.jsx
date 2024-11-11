import { Link } from "react-router-dom";
import  { Row, Col, Button, Nav } from "react-bootstrap";

import "./../../Styles/Error-Styles/ErrorStyles.css";

import error from "./../../../Assets/Pictures/ErrorPage/error.png";

function NotFound(){
  return (
    <>
      <div id="error-page-container" className="d-flex justify-content-center align-items-center">

        <Col className="text-center" id="error-page-body-container">

          <div className="p-5" id="error-img">
            <img src={error} alt="404 error picture" className="img-fluid rounded shadow-lg" style={{maxHeight:"400px"}}/>
          </div>

          <h1 className="fs-1">404 - Not Found</h1>
          <div className="fs-4">
            <p>Sorry, the page you are looking for does not exist. You can navigate back to the home page with the link below</p>
            <Nav.Link to="/" as={Link} className="nav-link mb-5" id="error-home-page">
              <Button id="error-page-button" variant="primary">Home Page</Button>
            </Nav.Link> 
          </div>
        </Col>
      </div>
    </>
  );

};

export default NotFound;