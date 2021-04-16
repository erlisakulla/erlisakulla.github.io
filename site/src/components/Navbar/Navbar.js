import React from 'react';
import './Navbar.css';
import { FiDownload } from 'react-icons/fi';
import { Button } from 'antd';
import { Nav } from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div id="navbar">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/site" id="home-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item id="about-link">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" id="resume-btn" style={{marginRight:'0px'}}>
                <Button type="secondary" shape="round" icon={<FiDownload style={{marginRight:'5px'}}/>} size="default">
                  Resume
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    );
  }
}

export default Navbar;
