<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 50f75caf274af6850393dd035bcba530bdac7878
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiDotnet,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiCsharp
} from "react-icons/si";
<<<<<<< HEAD
=======
import "./Techstack.css"; // Add a CSS file for your custom styles

const TechIcon = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col
      xs={4}
      md={2}
      className={`tech-icons ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <div className="tech-icon-name">{name}</div>}
      {icon}
    </Col>
  );
};
>>>>>>> 50f75caf274af6850393dd035bcba530bdac7878

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
<<<<<<< HEAD
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      
=======
      <TechIcon icon={<DiHtml5 />} name="HTML5" />
      <TechIcon icon={<DiCss3 />} name="CSS3" />
      <TechIcon icon={<DiJavascript1 />} name="JavaScript" />
      <TechIcon icon={<DiReact />} name="React.js" />
      <TechIcon icon={<DiMongodb />} name="MongoDB" />
      <TechIcon icon={<SiExpress />} name="Express" />
      <TechIcon icon={<DiNodejs />} name="Node.js" />
      <TechIcon icon={<CgCPlusPlus />} name="C++" />
      <TechIcon icon={<SiNextdotjs />} name="Next.js" />
      <TechIcon icon={<DiGit />} name="Git" />
      <TechIcon icon={<DiBootstrap />} name="Bootstrap" />
      <TechIcon icon={<SiPostgresql />} name="PostgreSQL" />
      <TechIcon icon={<DiPython />} name="Python" />
      <TechIcon icon={<SiDotnet />} name=".NET" />
      <TechIcon icon={<SiCsharp />} name="C#" />
>>>>>>> 50f75caf274af6850393dd035bcba530bdac7878
    </Row>
  );
}

export default Techstack;
