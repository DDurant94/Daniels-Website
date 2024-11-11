import { Button, Row, Col } from "react-bootstrap"

const LetsWorkTogether = () =>{

  const icon =
      <lord-icon
        src="https://cdn.lordicon.com/keitohbg.json"
        trigger="in"
        stroke="light"
        delay="1000"
        state="in-reveal"
        colors="primary:#dad7cd,secondary:#588157"
        style={{width:"4rem",height:"3rem"}}>
      </lord-icon>;

  return (
    <>
    
      <section id="work-together-section" className="container-fluid-center mx-5">

        <div id="work-together-container" className="p-lg-5">

          <div id="work-together-header-container">

            <div id="work-together-title-container">

              <h2 className="p-1">Let's Work Together {icon}</h2>
            
            </div>

          </div>

          <div id="work-together-body-container">

            <p>
              Are you ready to turn your web project dreams into reality? With a specialization in robust backend systems using 
              Python and Flask, I also bring expertise in interaction design and scalable design systems. From crafting 
              dynamic apps to ensuring top-notch backend security, I help awesome people like you build ambitious yet 
              accessible web projects. Let's make something amazing together! 
            </p>

            <div id="work-together-bttn-container">

              <Button id="work-together-bttn" href="mailto:dannyjdurant@gmail.com?subject=Hello Daniel, I'd like to work with you!">
                Contact Me
              </Button>

            </div>
            
          </div>
        
        </div>

      </section>

    </>
  );
};

export default LetsWorkTogether