import { Carousel } from "react-bootstrap";

import GalleryPictureOfMe1 from "./../../../../../../Assets/Pictures/GalleryPhotos/GalleryPictureOfMe1.jpg";
import GalleryPictureOfMe2 from "./../../../../../../Assets/Pictures/GalleryPhotos/GalleryPictureOfMe2.jpg";
import GalleryPictureOfMe3 from "./../../../../../../Assets/Pictures/GalleryPhotos/GalleryPictureOfMe3.jpg";
import Family from "./../../../../../../Assets/Pictures/GalleryPhotos/Family.jpg";

const PhotoCarousel = () => {

  return(
    <>

      <div id="gallery-carousel-container" className="mx-sm-0 mx-md-2 mx-lg-5 mx-xl-5 mx-xxl-5 my-2 px-5">
        <Carousel id="gallery-carousel" className="p-2 container-fluid-center">
          <Carousel.Item>
            <div id="photo-carousel-img-container">
              <img src={GalleryPictureOfMe1} alt="Picture of Daniel" className="img-fluid d-block mx-auto"></img>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id="photo-carousel-img-container">
              <img src={GalleryPictureOfMe2} alt="Picture of Daniel" className="img-fluid d-block mx-auto"></img>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id="photo-carousel-img-container">
              <img src={GalleryPictureOfMe3} alt="Picture of Daniel" className="img-fluid d-block mx-auto"></img>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div id="photo-carousel-img-container">
              <img src={Family} alt="Picture of Daniel and his Family" className="img-fluid d-block mx-auto"></img>
            </div>
          </Carousel.Item>
        </Carousel>

      </div>
    </>
  );
};

export default PhotoCarousel;