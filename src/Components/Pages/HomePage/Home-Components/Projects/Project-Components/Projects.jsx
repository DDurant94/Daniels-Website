import { Card, Button, ListGroup} from "react-bootstrap";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import AdvancedECommAPI from "./../../../../../../Assets/Pictures/ProjectsPage/AdvancedECommAPI.jpeg";
import FullStackEComm from "./../../../../../../Assets/Pictures/ProjectsPage/FullStackEComm.jpeg";
import FactoryManageAPI from "./../../../../../../Assets/Pictures/ProjectsPage/FactoryManageAPI.jpeg"; 
import PokeCatcher from "./../../../../../../Assets/Pictures/ProjectsPage/PokeCatcher.jpeg";
import MarvelSearchEngine from "./../../../../../../Assets/Pictures/ProjectsPage/MarvelSearchEngine.jpeg";



const Projects = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return(
    <>

      <div id="project-cards-container" className="mx-2 mb-2 container-fluid-center">

        <svg id="progress" width="25" height="25" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{ pathLength: scrollXProgress }}/>
        </svg>

        <ListGroup ref={ref} id="projects-list" as={"ul"} className="shadow-lg rounded-3">

          <ListGroup.Item id="projects-list-item" as={"li"} className="mx-0 my-4">
            <Card className="container-fluid-center p-2 shadow-lg rounded-3" id="project-cards" style={{height:"100%"}}>

              <Card.Img id="card-img" alt="Advanced E-Commerce API Website home page" src={AdvancedECommAPI} className='img-fluid shadow-lg rounded-3'/>
              <Card.Body id="projects-card-body" className="d-flex justify-content-around">

                <Card.Title id="projects-card-title" className="mb-0">Advanced E-Commerce API</Card.Title>
                
                <Card.Text>
                  Rebuilding UI of &quot;E-Commerce&quot; for Full Stack Deployment.
                </Card.Text>

                <div id="projects-bttn-group"  className="d-flex justify-content-around p-2">

                  <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://github.com/DDurant94/Advanced-API-Deployment">GitHub</Button>

                  <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://advanced-api-deployment.onrender.com/api/docs/">Live Site</Button>

                </div>

              </Card.Body>

            </Card>
          </ListGroup.Item>

          <ListGroup.Item id="projects-list-item" as={"li"} className="mx-0 my-4">
            <Card className="container-fluid-center p-2 shadow-lg rounded-3" id="project-cards" style={{height:"100%"}}>

              <Card.Img id="card-img" alt="E-Commerce Website home page" src={FullStackEComm} className='img-fluid shadow-lg rounded-3'/>

              <Card.Body id="projects-card-body" className="d-flex justify-content-around">

                <Card.Title id="projects-card-title" className="mb-0">E-Commerce</Card.Title>

                <Card.Text>
                  Rebuilding UI to Connect &quot;Advanced E-Commerce API&quot; for Full Stack Deployment.
                </Card.Text>

                <div id="projects-bttn-group"  className="d-flex justify-content-around p-2">
                  <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://github.com/DDurant94/Advanced-API-Deployment">GitHub</Button>
                </div>

              </Card.Body>

            </Card>
          </ListGroup.Item>

          <ListGroup.Item id="projects-list-item" as={"li"} className="mx-0 my-4">
            <Card className="container-fluid-center p-2 shadow-lg rounded-3" id="project-cards" style={{height:"100%"}}>

              <Card.Img id="card-img" alt="Factory Management API Website home page" src={FactoryManageAPI} className='img-fluid shadow-lg rounded-3'/>
              <Card.Body id="projects-card-body" className="d-flex justify-content-around">

                <Card.Title id="projects-card-title" className="mb-0">Factory Management API</Card.Title>

                <Card.Text>
                  Factory Management RESTful API.
                </Card.Text>

                  <div id="projects-bttn-group"  className="d-flex justify-content-around p-2">
                    <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://github.com/DDurant94/Advanced-API-Deployment">GitHub</Button>
                  </div>

              </Card.Body>

            </Card>
          </ListGroup.Item>
          
          <ListGroup.Item id="projects-list-item" as={"li"} className="mx-0 my-4">
            <Card className="container-fluid-center p-2 shadow-lg rounded-3" id="project-cards" style={{height:"100%"}}>

              <Card.Img id="card-img" alt="Poké Catcher Website home page" src={PokeCatcher} className='img-fluid shadow-lg rounded-3'/>
              <Card.Body id="projects-card-body" className="d-flex justify-content-around">

                <Card.Title id="projects-card-title" className="mb-0">Poké Catcher</Card.Title>

                <Card.Text>
                  Pokémon information search engine.
                </Card.Text>

                  <div id="projects-bttn-group" className="d-flex justify-content-around p-2">
                    <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://github.com/DDurant94/Pokemon-API-JavaScript">GitHub</Button>
                  </div>

              </Card.Body>

            </Card>
          </ListGroup.Item>

          <ListGroup.Item id="projects-list-item" as={"li"} className="mx-0 my-4">
            <Card className="container-fluid-center p-2 shadow-lg rounded-3" id="project-cards" style={{height:"100%"}}>

              <Card.Img id="card-img" alt="React Marvel API Website home page" src={MarvelSearchEngine} className='img-fluid shadow-lg rounded-3'/>
              <Card.Body id="projects-card-body" className="d-flex justify-content-around">

                <Card.Title id="projects-card-title" className="mb-0">React Marvel API</Card.Title>

                <Card.Text>
                  Marvel information search engine.
                </Card.Text>

                  <div id="projects-bttn-group" className="d-flex justify-content-around p-2">
                    <Button id="project-bttns" className="p-1 shadow rounded-3" href="https://github.com/DDurant94/React-BootStrap">GitHub</Button>
                  </div>

              </Card.Body>

            </Card>
          </ListGroup.Item>

        </ListGroup>

    </div>
    </>
  );

};

export default Projects;