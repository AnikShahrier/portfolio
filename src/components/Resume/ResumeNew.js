import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Md Anik Shahrier - Front-End Designer - Resume.pdf";
import { AiOutlineAim, AiOutlineDownload, AiOutlineFolderView, AiOutlineFundProjectionScreen, AiOutlineFundView } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div >
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" ,marginTop: "130px", paddingBottom: "50px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineFundProjectionScreen />
            &nbsp;View CV
          </Button>
        </Row>

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center"
          onLoadError={(error) => console.error("Failed to load PDF:", error)}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{margin:"20px", justifyContent: "center", position: "relative" ,marginTop: "30px", paddingBottom: "165px"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
