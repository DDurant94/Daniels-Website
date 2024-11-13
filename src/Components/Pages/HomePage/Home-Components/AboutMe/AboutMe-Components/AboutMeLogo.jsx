import {Col, Row} from "react-bootstrap";
import { useState } from "react";

const AboutMeIcons = () => {
  const [iconTrigger, setIconTrigger] = useState('in');
  const [iconState, setIconState] = useState('in-reveal');
  
  const HoverIcons = () =>{
    setIconTrigger("hover");
    setIconState("null")
  };

  return (
    <>

    <div className="container-fluid-center text-center mt-5 p-5" id="icon-container">

      <Row>
        <Col>
          <lord-icon
            id="security-icon"
            src="https://cdn.lordicon.com/dhsgnevn.json"
            trigger={iconTrigger}
            delay="1500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
    
        </Col>
      </Row>

      <Row >
        <Col>
        
          <lord-icon
              id="coding-icon"
              className="coding-icon"
              src="https://cdn.lordicon.com/bgnvaiwd.json"
              trigger={iconTrigger}
              delay="1500"
              stroke="light"
              state={iconState}
              colors="primary:#003A70,secondary:#8DBEDC"
              style={{width:'4rem',height:'4rem'}}
              onMouseOver={HoverIcons}>
          </lord-icon>

        </Col>

        <Col>
          <lord-icon
            id="deployment-icon"
            src="https://cdn.lordicon.com/yfuosite.json"
            trigger={iconTrigger}
            delay="2000"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        </Col>

        <Col>

          <lord-icon
            id="repository-icon"
            src="https://cdn.lordicon.com/rokunbup.json"
            trigger={iconTrigger}
            delay="2500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

      </Row>

      <Row>

        <Col>
          <lord-icon
              id="api-icon"
              src="https://cdn.lordicon.com/noklggsz.json"
              trigger={iconTrigger}
              delay="3000"
              stroke="light"
              state={iconState}
              colors="primary:#003A70,secondary:#8DBEDC"
              style={{width:'4rem',height:'4rem'}}
              onMouseOver={HoverIcons}>
            </lord-icon>
        </Col>

        <Col>
        
          <lord-icon
            id="python-icon"
            src="https://cdn.lordicon.com/tmffjodc.json"
            trigger={iconTrigger}
            delay="3500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

        <Col>
        
        
          <lord-icon
            id="html-icon"
            src="https://cdn.lordicon.com/kgwqxfas.json"
            trigger={iconTrigger}
            delay="4000"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

      </Row>

      <Row>
        <Col>
          
          <lord-icon
            id="web-design-icon"
            src="https://cdn.lordicon.com/iteftpuu.json"
            trigger={iconTrigger}
            delay="4500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

        <Col>
        
          <lord-icon
            id="web-dev-icon"
            src="https://cdn.lordicon.com/txuacdsz.json"
            trigger={iconTrigger}
            delay="5000"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

        <Col>
        
          <lord-icon
            id="responsive-icon"
            src="https://cdn.lordicon.com/bovvggok.json"
            trigger={iconTrigger}
            delay="5500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>
      </Row>

      <Row>

        <Col>
        
          <lord-icon
            id="data-icon"
            src="https://cdn.lordicon.com/kguufhvz.json"
            trigger={iconTrigger}
            delay="6000"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
        
        </Col>

        <Col>

          <lord-icon
            id="code-forking-icon"
            src="https://cdn.lordicon.com/wxwbdnuw.json"
            trigger={iconTrigger}
            delay="6500"
            stroke="light"
            state={iconState}
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>
                
        </Col>

        <Col>

          <lord-icon
            id="tech-icon"
            src="https://cdn.lordicon.com/eiutmntl.json"
            trigger={iconTrigger}
            delay="7000"
            state={iconState}
            stroke="light"
            colors="primary:#003A70,secondary:#8DBEDC"
            style={{width:'4rem',height:'4rem'}}
            onMouseOver={HoverIcons}>
          </lord-icon>

        </Col>


      </Row>

    </div>
    </>
  );
};

export default AboutMeIcons;




