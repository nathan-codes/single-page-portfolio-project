import "./Intro.css";

import profileImage from "../assets/nathan.jpg";

function Intro() {
  return (
    <section className="Intro">
      <div className="container text-center">
        <div className="row">
            <div className="col d-flex flex-column align-items-center">
                <h1 className="intro-header ">
                Nice to meet you! I&apos;m{" "}
                <span style={{ borderBottom: "4px solid #4EE1A0" }}>
                    Nathan Turkson.
                </span>
                </h1>

                <p className="intro-description">
                Based in Ghana, I’m a front-end developer passionate about
                building accessible web apps that users love.
                </p>

                <a href="#" className="contact-link ">
                CONTACT ME
                </a>
            </div>
          <div className="col">
            
            <img src={profileImage} alt="profile" className="profileImage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
