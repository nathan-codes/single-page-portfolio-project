import "./Intro.css";

import profileImage from "../assets/nathan.jpg";
import Button from "./Button";

function Intro() {
  return (
    <section className="Intro">
      <div className="container ">
        <div className="row">
          <div className=" col col-lg-7 d-flex flex-column align-items-start justify-content-center trial">
            <h1 className="intro-header ">
              Nice to meet you! I&apos;m
              <span
                style={{
                  borderBottom: "4px solid #4EE1A0",
                  paddingLeft: "10px",
                }}
              >
                Nathan Turkson.
              </span>
            </h1>

            <p className="intro-description">
              Based in Ghana, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>

            <Button text="CONTACT ME" />
          </div>
          <div className="col">
            <img
              src={profileImage}
              alt="profile"
              className="profileImage img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
