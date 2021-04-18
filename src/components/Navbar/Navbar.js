import React from 'react';
import './Navbar.css';
import { FiDownload, FiMenu } from 'react-icons/fi';
import { Button } from 'antd';
import { Nav } from 'react-bootstrap';
import Resume from '../../resume/ErlisaKullaCV.pdf';

function Navbar() {
  const closeNav = () => {
    document.getElementById("active").checked = false;
  } 

  return (
    <>
      <div id="navbar">
        <Nav className="justify-content-center" fixed="top" id="nav">
          <Nav.Item>
            <Nav.Link href="#skills" id="skills-link">
              Skills
            </Nav.Link>
          </Nav.Item>

          <Nav.Item id="about-link">
            <Nav.Link href="#about" id="about-link">
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#projects" id="projects-link">
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#contact" id="contact-link">
              Contact
            </Nav.Link>
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
          <FiMenu style={{marginRight:'5px'}}/>
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
