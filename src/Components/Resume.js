import React, { Component } from "react";
import Slide from "react-reveal";
import ReactTooltip from 'react-tooltip';
import { Container, Row, Col } from 'react-grid-system';

class Resume extends Component {
  getRandomColor() {
    return "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
  }

  render() {
    if (!this.props.data) return null;

    const renderEducation = this.props.data.education.map(function (education, index) {
      let educationImage = "images/" + education.image;
      return <Row key={index} className="education">
        <Col md={4} sm={12} style={{ textAlign: "center" }}>
          <h1>
            <img className="education-pic" src={educationImage} alt={education.school} />
          </h1>
        </Col>
        <Col sm={12} md={8}>
          <div>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        </Col>
      </Row>
    });

    const renderWork = this.props.data.work.map(function (work, index) {
      let workImage = "images/" + work.image;
      return (
        <Row key={index} className="work">
          <Col sm={12} md={4} style={{ textAlign: "center" }}>
            <h1>
              <img className="work-pic" src={workImage} alt={work.company} style={{ backgroundColor: '#108FCF' }} />
            </h1>
          </Col>
          <Col sm={12} md={8}>
            <div>
              <h3>{work.company}</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <p>{work.description.split("\n").map(item => <>{item}<br /></>)}</p>
            </div>
          </Col>
        </Row>
      );
    });

    const skills = this.props.data.skills.map((skills, index) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={index} data-tip={skills.level}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={500}>
          <Container>
            <Row style={{marginBottom:20}}>
              <Col sm={4} style={{ textAlign: "center" }}>
                <h1>
                  <span>Education</span>
                </h1>
              </Col>
            </Row>
            {renderEducation}
          </Container>
        </Slide>

        <Slide left duration={500}>
          <Container>
            <Row style={{marginBottom:20}}>
              <Col sm={4} style={{ textAlign: "center" }}>
                <h1>
                  <span>Work</span>
                </h1>
              </Col>
            </Row>
            {renderWork}
          </Container>
        </Slide>

        <Slide left duration={500}>
          <Container>
            <Row>
              <Col sm={12} md={4} style={{ textAlign: "center" }}>
                <h1>
                  <span>Skills</span>
                </h1>
              </Col>
              <Col sm={12} md={8}>
                <div className="bars">
                  <ReactTooltip />
                  <ul className="skills">{skills}</ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Slide>
      </section>
    );
  }
}

export default Resume;
