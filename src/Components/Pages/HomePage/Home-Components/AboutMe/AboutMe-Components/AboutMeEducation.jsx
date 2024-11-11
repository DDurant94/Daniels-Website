import { motion, inView } from "framer-motion";
import { useRef } from "react";

const Education = () => {

  return(
    <>

      <div className="container-fluid-center text-center p-2" id="about-me-edu-container">

        <div id="about-me-edu-icon-container" className="mt-2">

          <lord-icon
              src="https://cdn.lordicon.com/uvaoqsvy.json"
              trigger="morph"
              stroke="light"
              state="morph-books"
              colors="primary:#dad7cd,secondary:#588157"
              style={{width:"3rem",height:"3rem"}}>
          </lord-icon>

        </div>

        <div className="my-3" id="about-me-edu-title-container">
          <h3 className="">Education</h3>
        </div>

        <div className="" id="about-me-edu-body-container">

          <div className="" id="about-me-edu-body-title-containers">
            <h4 className="" >Full Stack Software Engineering Certification | Backend Specialization Certification | Coding Temple</h4>
          </div>

          <div className="" id="about-me-edu-body-text-containers">
            <p>
              Completed an intensive and immersive software engineering program with a focus on full-stack development and deeper emphasis on backend development. Gained hands-on experience in building and deploying responsive, user-friendly applications, collaborating with teams, and adhering to industry best practices for scalable, maintainable code.
            </p>
          </div>

          <div id="about-me-edu-body-background-container" className="mt-5 mb-4">

            <div className="" id="about-me-edu-body-title-containers">
              <h4>Background in Management and Logistics</h4>
            </div>

            <div className="" id="about-me-edu-body-text-containers">
              <p>
                Extensive experience in management and logistics, including roles such as Location Manager at Agri Trails Coop and Conductor at Union Pacific Railroad. Developed strong problem-solving skills, the ability to perform under pressure, and a strategic approach to project management and operational efficiency. These qualities now enhance my approach to software engineering, allowing me to manage complex projects and deliver high-quality solutions.
              </p>
            </div>

          </div>

        </div>

      </div>
      
    </>
  );

};

export default Education;