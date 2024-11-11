import PhotoCarousel from "./Gallery-Components/Carousel";

import "./../../../../Styles/Gallery-Styles/GalleryStyles.css"

import { Row, Col, Container } from "react-bootstrap";

const PhotoGallery = () => {

  return (
    <>
      <Container id="gallery-container" className="container-fluid-center">
        <Row className="">
          <Col>
            <PhotoCarousel />
          </Col>
        </Row>
      </Container>
    </>
  );

};

export default PhotoGallery;