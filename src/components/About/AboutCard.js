import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Md. Anik Shahrier </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently self-employed as a web developer.
            <br />
            I have completed my B.Sc. in Computer Science and Engineering from <i >
              <b className="purple">Bangladesh University of Business and Technology</b>
              </i> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentery
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is impossible. The word itself says 'I'm possible!'"{" "}
          </p>
          <footer className="blockquote-footer">Audrey Hepburn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
