import React from 'react';
import './Navbar.css';
import { FiDownload } from 'react-icons/fi';
import { Button } from 'antd';
import { Nav } from 'react-bootstrap';
import Resume from '../../resume/ErlisaKullaCV.pdf';

function Navbar(props) {
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
    </>
  );
}

export default Navbar;
