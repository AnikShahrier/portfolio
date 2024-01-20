import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import api from "../../Assets/Projects/api.png";
import designer from "../../Assets/Projects/designer.png";

import moviehub from "../../Assets/Projects/moviehub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={designer}
              isBlog={false}
              title="3D Dress Customizer"
              description="Experience the future of T-shirt design with our AI-powered 3D designer. Unleash your creativity, customize effortlessly, and visualize your unique designs in real-time. Elevate your style game with our user-friendly platform. Design, personalize, and redefine your T-shirt journey today!"
              ghLink="https://github.com/AnikShahrier/3D-dress-Customizer"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviehub}
              isBlog={false}
              title="Movie Hub"
              description="My ReactJS movie website is a sleek, user-friendly platform that offers seamless navigation and an immersive experience for exploring, reviewing, and enjoying a diverse range of films. The project showcases your skills in web development and your passion for creating an immersive environment for movie enthusiasts.
              "
              ghLink="https://github.com/AnikShahrier/MovieHUB"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Minimal API"
              description="Your minimal API, crafted with C# and .NET, provides a streamlined and efficient solution for handling data interactions. Focused on simplicity, it delivers essential functionality while demonstrating your proficiency in backend development with C# and the .NET framework."
              ghLink="https://github.com/AnikShahrier/WEB-app"
              demoLink=" "              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
