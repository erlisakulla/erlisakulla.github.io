import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import logo from '../../img/logo-white.png';
import { FiLinkedin, FiFacebook, FiGithub, FiMail } from 'react-icons/fi';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <p id="footer-quote"><i>"A soul in tension that's learning to fly"</i></p>

          <Grid container spacing={5}>

            <Grid item xs={12} md={4}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <img id="footer-img" src={logo} alt="footer-img"/>
                </Grid>

                <Grid item xs={12} md={6}>
                  <h3 id="footer-name">Erlisa Kulla</h3>
                </Grid>
              </Grid>
            </Grid>

            <Grid item  xs={12} md={4}>
              <div  id="footer-nav-cont">
                <ul id="footer-nav">
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul> 
              </div>
              
            </Grid>
            
            <Grid item xs={12} md={4}>
              <div className="social-media-icons">
                <a href="https://github.com/erlisakulla" target="_blank" rel="noreferrer"><FiGithub size={40}/></a>
                <a href="https://www.linkedin.com/in/erlisa-kulla/" target="_blank" rel="noreferrer"><FiLinkedin size={40}/></a> 
                <a href="https://www.facebook.com/profile.php?id=100008465611585" target="_blank" rel="noreferrer"><FiFacebook size={40}/></a>  
                <a href="mailto:erlisakulla@gmail.com"><FiMail size={40}/></a>
              </div>
            </Grid>

          </Grid>

          <div className="footer-text">
            Made with React and Github Pages <br/>
            Copyright © Erlisa Kulla 2023
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
