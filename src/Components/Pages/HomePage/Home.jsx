import { motion } from "framer-motion";

import HomeHeader from "./../HomePage/Home-Components/Header/HomeHeader";
import AboutMe from "./../HomePage/Home-Components/AboutMe/AboutMe";
import Skills from "./../HomePage/Home-Components/Skills/Skills";
import ContactMe from "./../HomePage/Home-Components/ContactMe/ContactMe";
import PortfolioProjects from "./../HomePage/Home-Components/Projects/PortfolioProjects";
import PhotoGallery from "./../HomePage/Home-Components/Gallery/PhotoGallery";

const Home = () => {

  return (
    <>
    <div id="home-container" className="container-fluid-center">

      <div id="home-header-container" className="mx-5">
        <HomeHeader/>
      </div>

      <div id="home-body-container">

        <div className="shadow-lg rounded-5">

          <div id="about-me" className="mb-3">
            <AboutMe/>
          </div>

        </div>

        <hr style={{ width: '100%', borderColor:'#dad7cda7' }}/>
        <br/>

        <div className="shadow-lg rounded-5">

        <div id="skills" className="mb-5" >
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
        
        <hr style={{ width: '100%', borderColor:'#dad7cda7' }}/>
        <br />

        <div className="shadow-lg rounded-5 p-3">

          <div id="photo-gallery">
            <PhotoGallery/>
          </div>

        </div>

      </div>

    </div>

    </>
  )
};

export default Home;