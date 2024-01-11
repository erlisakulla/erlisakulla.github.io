import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { Button } from 'antd';
import { Nav } from 'react-bootstrap';
import Resume from '../../resume/ErlisaKullaCV-Jan2024.pdf';

function Navbar() {
  const closeNav = () => {
    document.getElementById("active").checked = false;
  } 

  return (
    <>
      <div id="navbar">
        <Nav className="justify-content-center" fixed="top" id="nav">
          <Nav.Item>
            <Link activeClass="active" className="nav-link" to="skills" spy={true} smooth={true} duration={500} offset={-150}>Skills</Link>
          </Nav.Item>

          <Nav.Item>
            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} duration={500} offset={-150}>About</Link>
          </Nav.Item>

          <Nav.Item>
            <Link activeClass="active" className="nav-link" to="projects" spy={true} smooth={true} duration={500} offset={-150}>Projects</Link>
          </Nav.Item>

          <Nav.Item>
            <Link activeClass="active" className="nav-link" to="contact" spy={true} smooth={true} duration={500} offset={-150}>Contact</Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link 
              href={Resume} 
              target="_blank" 
              rel="noreferrer noopener" 
              id="resume-btn" 
              style={{marginRight:'0px'}}
            >
              <Button 
                type="secondary" 
                shape="round" 
                icon={<FiDownload style={{marginRight:'5px'}}/>} 
                size="default"
              >
                Resume
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div id="collapsed-navbar">
        <input type="checkbox" id="active"/>
        <label htmlFor="active" className="menu-btn">
          <FiMenu size={25} id="open-nav"/>
          <FiX size={25} id="close-nav"/>
        </label>

        <div className="wrapper">
          <ul>
            <li>
              <Nav.Item>
                <Nav.Link href="#skills" onClick={() => closeNav()}>
                  Skills
                </Nav.Link>
              </Nav.Item>
            </li>

            <li>
              <Nav.Item>
                <Nav.Link href="#about"  onClick={() => closeNav()}>
                  About
                </Nav.Link>
              </Nav.Item>
            </li>

            <li>
              <Nav.Item>
                <Nav.Link href="#projects"  onClick={() => closeNav()}>
                  Projects
                </Nav.Link>
              </Nav.Item>
            </li>

            <li>
              <Nav.Item>
                <Nav.Link href="#contact" id="contact-link" onClick={() => closeNav()}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </li>

            <li>
              <Nav.Link 
                href={Resume} 
                target="_blank" 
                rel="noreferrer noopener" 
                style={{marginRight:'0px'}}
                onClick={() => closeNav()}
              >
                <Button 
                  type="secondary" 
                  shape="round" 
                  id="resume-btn2"
                  icon={<FiDownload style={{marginRight:'5px'}}/>} 
                  size="default"
                >
                  Resume
                </Button>
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
