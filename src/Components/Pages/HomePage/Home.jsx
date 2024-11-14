import HomeHeader from "./../HomePage/Home-Components/Header/HomeHeader";
import AboutMe from "./../HomePage/Home-Components/AboutMe/AboutMe";
import Skills from "./../HomePage/Home-Components/Skills/Skills";
import ContactMe from "./../HomePage/Home-Components/ContactMe/ContactMe";
import PortfolioProjects from "./../HomePage/Home-Components/Projects/PortfolioProjects";
import PhotoGallery from "./../HomePage/Home-Components/Gallery/PhotoGallery";

import { Link } from "react-scroll";

const Home = () => {

  return (
    <>
    <div id="home-container" className="container-fluid-center mx-3">

      <div id="home-header-container" className="mx-5">
        <HomeHeader/>
      </div>

      <div id="home-body-container">

        <div className="shadow rounded-5" style={{backgroundColor:"#ffffff8f"}}>

          <div id="about-me" className="mb-5">
            <AboutMe/>
          </div>

        </div>

        
        <br/>

        <div className="shadow rounded-5" style={{backgroundColor:"#ffffff8f"}}>

          <div id="skills" className="mb-5">
            <Skills/>
          </div>

        <br/>
        

          <div id="projects" className="mb-1">
            <PortfolioProjects/>
          </div>



          <div id="contact-me" className="mb-5">
            <ContactMe/>
          </div>

        </div>
        
        <br />

        <div className="shadow rounded-5 p-3" style={{backgroundColor:"#ffffff8f"}}>

          <div id="photo-gallery">
            <PhotoGallery/>
          </div>

        </div>

        <div className="my-5 mx-5 p-3 container-fluid-center">

          <div className="text-center mx-5" id="second-nav-bar">

            <div className="d-flex justify-content-center">
              <div className="m-2 p-2">
                <Link id="nav-links" to="about-me" smooth={true} duration={300}>About</Link>
              </div>

              <div className="m-2 p-2">
                <Link id="nav-links" to="skills" smooth={true} duration={300}>Skills</Link>
              </div>

              <div  className="m-2 p-2">
                <Link id="nav-links" to="projects" smooth={true} duration={300}>Projects</Link>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    </>
  )
};

export default Home;