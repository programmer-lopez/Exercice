import React from "react";

import "../styles/About.css";
import aboutImg from "../imagenes/about.jpg";

const About = () => {
  return (
    <div className="about component__space" id="about">
    <div className="container">
      <div className="row">
        <div className="col__2">
          <img src={aboutImg} alt="" className="about__img" />
        </div>
        <div className="col__2">
          <h1 className="about__heading"> About Me</h1>
          <h1 className="about__heading_ing"> INGENIERO EN SISTEMAS COMPUTACIONALESx</h1>
          <div className="about__meta">
            <p className="about__text p__color">
            Soy una persona que precisa instrucciones organizadas para que un ordenador
             pueda ejecutar sistemas, programas y aplicaciones que sean eficaces, 
             accesibles y afable. Con atención, esfuerzo y perseverancia.
            </p>
            <p className="anout__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even sligh
            </p>
            <div className="about__button d__flex align__items__center">
              <a href="#botton">
                <button className="about btn pointer">Downloader CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default About;
