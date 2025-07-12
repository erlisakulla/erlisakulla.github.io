import React from 'react';
import './HomePage.css';
import self from '../../img/self.png';
import { Grid } from '@material-ui/core';
// import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';


class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-page">
          <div id="intro">
            
            <Grid container spacing={1}>
              <Grid item xs={12}  md={4}>
                <img id="home-img" src={self} alt="intro-img"/>
              </Grid>

              <Grid item xs={12} md={8}>
                <div className="intro-section">
                  <h2 id="name">Erlisa Kulla</h2>

                  <p id="intro-text">
                    <b style={{color:'#3f51b5'}} id="software">Software Developer</b> and <b style={{color:'#f50057'}} id="artist">Artist</b> with a great passion for creative exploration through programming, music and art
                  </p>

                  <p style={{fontSize:'20px'}} id="location">
                    📍 Berlin, Germany
                  </p>

                  <div>
                    <p id="coming-soon">
                      🛠️ New Website Coming Soon...
                    </p>
                  </div>

                  {/* <div>
                    Resume
                  </div> */}

                  {/* <div className="social-media-icons">
                    <a href="https://github.com/erlisakulla" target="_blank" rel="noreferrer"><FiGithub size={40}/></a>
                    <a href="https://www.linkedin.com/in/erlisa-kulla/" target="_blank" rel="noreferrer"><FiLinkedin size={40}/></a>
                    <a href="mailto:erlisakulla@gmail.com"><FiMail size={40}/></a>
                  </div> */}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

export default Home;