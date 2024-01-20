import React, { useState } from "react";
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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
    </Row>
  );
}

export default Techstack;
