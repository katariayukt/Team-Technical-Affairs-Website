import React from "react";
import "./Home.css";
import News from "./News";
import Events from "./Events";
import Events2 from "./Events2";
import {
  Row,
  Col,
  Container,
  Figure,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import News2 from "./News2";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Login from "./login";
import ReactDOM from 'react-dom';
import Blogs from './Blogs'
import { Link, BrowserRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
  duration: 500,
  easing: "ease-in-quad",
});

ReactDOM.render(
  <Router>
     <Switch>
      <Route exact path="/blogs" component={Blogs }/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div className="body">
      <div className="top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="light"
          className="navbar"
        >
          <Navbar.Brand className="title" href="#home">
            Team Technical Affairs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav-item">
              <Nav.Link>
                <a
                  href="/"
                  onClick={(e) => {
                    let hero = document.getElementById("administration");
                    e.preventDefault(); 
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Administration
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  href="/"
                  onClick={(e) => {
                    let hero = document.getElementById("events");
                    e.preventDefault(); 
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Events
                </a>
              </Nav.Link>
              <Nav.Link>
                <Router>
                  <Link to="/blogs" className="placed-blog">
                    Placements
                  </Link>
                </Router>
              </Nav.Link>
              <Nav.Link>
                <a
                  href="/"
                  onClick={(e) => {
                    let hero = document.getElementById("tech-team");
                    e.preventDefault(); 
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Tech Team
                </a>
              </Nav.Link>
              <NavDropdown title="Societies" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.nitj.ac.in/mechanical/teams/some_society.html">
                  Some
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Opengeest
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/ice/spice/index.html#Events">
                  SPice
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/ece/">
                  SoEce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ties</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CHess</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Soccer</NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/biotech/SOBER.html">
                  Sober
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Tex Styles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">IT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">EE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <a
                  href="/"
                  onClick={(e) => {
                    let hero = document.getElementById("contact");
                    e.preventDefault(); 
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </Nav.Link>
              <Nav.Link>
                <Login />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
        <Container>
          <Row>
            <Col md={4}>
              <div className="title-end">Team Technical Affairs</div>
            </Col>
            <Col md={4}>
              <h4>Follow Us On</h4>
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.gmail.com/">
                <FaEnvelope />
              </a>
            </Col>
            <Col md={4}>
              <div id="contact"></div>
              <h4>Contact Info</h4>
              <p>
                OUR ADDRESS OFFICE (USA) P.O. Box 10641 Pleasanton Calfornia
                9488 United State
              </p>
              <p>
                OFFICE (INDIA) Pheruman Road Amritsar -143112 Punjab (India)
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
