const ContactMeLinks = () => {

  return(
    <>

    <div id="contact-me-links-container"  className="container-fluid-center mb-5">
        <div className="d-flex justify-content-center">
          <div className="px-sm-1 px-md-2 px-lg-3 px-xl-5 px-xxl-5">
            <a id="contact-me-links" href="mailto:dannyjdurant@gmail.com?subject=Hello Daniel" className="px-2"><i className="bi bi-envelope-fill"></i>dannyjdurant@gmail.com</a>
          </div>

          <div className="px-sm-1 px-md-2 px-lg-3 px-xl-5 px-xxl-5">
            <a id="contact-me-links" href="https://www.linkedin.com/in/daniel-durant-30a0252b9/" className="px-2"><i className="bi bi-linkedin"></i>LinkedIn</a>
          </div>
        </div>
    </div>
  
  </>
  );

};

export default ContactMeLinks;