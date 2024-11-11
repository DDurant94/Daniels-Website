import { Col, Row } from "react-bootstrap";

import LetsWorkTogether from "./ContactMe-Components/WorkTogether";
import ContactMeLinks from "./ContactMe-Components/ContactMeLinks";

import "./../../../../Styles/ContactMe-Styles/ContactMeStyles.css";

const ContactMe = () => {

  return(
    <>
      <div id="contact-me-container" className="m-lg-5 container-fluid-center">

        <Row className="g-3">
          <Col xs={12} sm={12} md={12} lg={12}>
            <LetsWorkTogether/>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <ContactMeLinks/>
          </Col>
        </Row>

      </div>
    
    </>
  );
};

export default ContactMe;