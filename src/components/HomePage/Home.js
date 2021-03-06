import React from "react";
import "./Home.css";
import News from "./News";
import Events from "./Events";
import Events2 from "./Events2";
import { Row, Col, Container, Figure } from "react-bootstrap";
import News2 from "./News2";
import AboutUs from "./AboutUs";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./Navigation";
import Contact from "./Contact";
AOS.init({
  offset: 200,
  duration: 500,
  easing: "ease-in-quad",
});

function Home() {
  return (
    <div className="body">
      <div className="top">
        <Navigation />
        <Container fluid>
          <Row>
            <Col md={4} className="news-col">
              <News />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <div className="Top-Image">
                <News2 />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="medium">
        <Container fluid className="medium-container">
          <Row
            className="medium-row1"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <AboutUs />
          </Row>
          <div id="events"></div>
          <Row
            className="medium-row2"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <Col md={5}>
              <Events />
            </Col>
            <Col md={7}>
              <Events2 />
            </Col>
          </Row>
          <div id="tech-team"></div>
          <Row className="tech-team">
            <h1>Tech Team</h1>
          </Row>
          <Row>
            <Team />
          </Row>
          <div id="administration"></div>
          <Row className="admin">
            <h1>Administration</h1>
          </Row>
          <hr></hr>
          <Row className="center-image">
            <Figure>
              <Figure.Image
                className="image-shape"
                alt="171x180"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
              />
              <Figure.Caption>
                Dr. LK Awasthi
                <br />
                <h3>Director</h3>
              </Figure.Caption>
            </Figure>
          </Row>
          <Row className="center-image">
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. Anish Sachdeva
                  <br />
                  <h3>Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. LK Awasthi
                  <br />
                  <h3>Associate Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="center-image">
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. Anish Sachdeva
                  <br />
                  <h3>Associate Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. LK Awasthi
                  <br />
                  <h3>Associate Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
