import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {CVIcon} from "../icons/svg/cv.js";
import CVPdf from '../files/NguyenNhatTan_CV_En.pdf'
class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const facebook = this.props.data.facebook;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true}  />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
                {name}
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={facebook} className="button btn facebook-btn">
                  <i className="fa fa-facebook"></i>Facebook
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
              <ul>
                <a href={CVPdf} target="_blank" rel="noreferrer" className="button btn" style={{backgroundColor: "black"}}>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CVIcon />
                    <div>Link to CV (PDF)</div>
                  </div>
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
