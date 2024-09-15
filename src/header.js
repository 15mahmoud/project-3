





import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import { animateScroll } from 'react-scroll';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import df from './imgs/pic55.jpg'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';
import pic1 from "./pics/me.png";

function Header() { 
  const[scrY,setscrY] = useState(window.screenY)
  window.addEventListener('scroll',()=>{
     setscrY(window.scrollY)
  })
  const back = useRef(null);
  useEffect(()=>{
    if(scrY > 200)
    { back.current.style.backgroundColor = 'black'}
    else
    {
      back.current.style.backgroundColor = 'transparent'
    }   
  },[scrY])
  return (
    <div className="parent1">
      <Navbar
        ref={back}
        expand="lg"
        style={{ position: "fixed", width: "100%" }}
        sticky="top"
        className="rounded navbar"
      >
        <Container>
          <Navbar.Brand className="text-white main">
            <Nav.Link
              onClick={() => {
                window.location.reload();
              }}
            >
              <img
                src={pic1}
                alt="Mahmoud"
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="container1">
            <Nav className="group1">
              <Nav.Link
                onClick={() => {
                  animateScroll.scrollTo(0);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  animateScroll.scrollTo(553);
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  animateScroll.scrollTo(1093);
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
            <Nav className="group2">
              <div className="group2-div text-center">
                <Nav.Link target="_blank" href="https://github.com/15mahmoud">
                  <FontAwesomeIcon icon={faGithub} className="this404" />
                </Nav.Link>
              </div>
              <div className="group2-div text-center">
                <Nav.Link
                  target="_blank"
                  href="https://www.linkedin.com/in/mahmoud-soliman-703342228/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="this404" />
                </Nav.Link>
              </div>

              {/* <div className='group2-div text-center'>
                <Nav.Link target='_blank' href="https://codeforces.com/profile/Mahmoud1522003"><FontAwesomeIcon icon={faCode} className='this404'/></Nav.Link>
            </div> */}
            </Nav>

            <Nav.Link className="alo4">
              <div className="alo3">
                <h3>Let's connect</h3>
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="alo">
        <div className="butt text-center">
          <h4>Welcome to my portofolio</h4>
        </div>
      </Container>
      <Container className="alo2">
        <div className="output">
          <h1>
            <TypeAnimation
              sequence={[
                "Hi! My name is Mahmoud Soliman , Front-end Developer",
                5000,
                "Hi! My name is Mahmoud Soliman , React Developer",
                5000,
                "Hi! My name is Mahmoud Soliman , Back-end Node.js Developer",
                5000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="imgy">
          <img src={df} />
        </div>
      </Container>
    </div>
  );
}

export default Header;