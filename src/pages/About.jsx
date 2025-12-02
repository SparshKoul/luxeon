import React from "react";
import "../about.css";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="/Photos/rijhul.png" alt="Team Member 1" />
            </div>
            <div className="contentBx">
              <h3>
                Rudransh Sharma <br />
                <span>Creative Designer</span>
              </h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/rijhul-kaushal-699864323/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/rijhulkaushal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/rijhul-kaushal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="/Photos/ashmit.png" alt="Team Member 2" />
            </div>
            <div className="contentBx">
              <h3>
                Ashmit <br />
                <span>UI/UX Designer</span>
              </h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/ashmit-gautam-425b4b332"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/ashmit_gautam_16/profilecard/?igsh=eTQybmRoeHo1cTNq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/Ashmit1466"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="/Photos/sparsh2.png" alt="Team Member 3" />
            </div>
            <div className="contentBx">
              <h3>
                Sparsh <br />
                <span>Web Developer</span>
              </h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/sparsh-koul-05815b325/?trk=opento_sprofile_details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/sparshkoul_22/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/SparshKoul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
