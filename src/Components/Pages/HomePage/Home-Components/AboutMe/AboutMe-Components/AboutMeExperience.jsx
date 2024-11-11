
const AboutMeExperience = () => {


  return(
    <>
      <div className="container-fluid-center text-center p-2" id="about-me-xp-container">

        <div id="about-me-xp-logo-container" className="mt-2">

          <lord-icon
            src="https://cdn.lordicon.com/vxnfmfuw.json"
            trigger="hover"
            stroke="light"
            colors="primary:#dad7cd,secondary:#588157"
            style={{width:'3rem',height:'3rem'}}>
          </lord-icon>

        </div>

        <div id="about-me-xp-title-container" className="my-3">
          <h3 className="fs-">Experience</h3>
        </div>

        <div id="about-me-xp-body-container">
          <p className="">
            Full Stack Software Developer with expertise in backend development, specializing in technologies such as Python, JavaScript, TypeScript, HTML, CSS, React, Node.js, Flask, ORM, SQL, CI/CD pipelines, unit testing, Swagger for interactive documentation, JWT tokens, password hashing, and Werkzeug for security. Proficient in creating scalable and secure APIs, and experienced in building advanced APIs. Skilled in integrating complex backend systems and ensuring seamless functionality across various platforms.
          </p>
        </div>

      </div>
    </>
  );
};

export default AboutMeExperience;