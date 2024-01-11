import React from 'react';
import './HomePage.css';
import self from '../../img/self.png';
import { Grid } from '@material-ui/core';
import { BackTop, Button } from 'antd';
import { CanDoList } from '../sections/CanDo';
// import { LearningList } from '../sections/Learning';
import { Projects } from '../sections/Projects';
import ContactMe from '../sections/ContactMe';
import { FiChevronUp, FiChevronsRight } from 'react-icons/fi';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import { FiMoreHorizontal } from 'react-icons/fi';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.displaySkillsContent = this.displaySkillsContent.bind(this);
    this.displayToolsContent = this.displayToolsContent.bind(this);

    this.state = { 
      cardSkillsContent: false,
      cardToolsContent: false,
    };
  };

  displaySkillsContent() {
    this.setState({cardSkillsContent: !this.state.cardSkillsContent})
  }

  displayToolsContent() {
    this.setState({cardToolsContent: !this.state.cardToolsContent})
  }

  render() {
    return (
      <>
        <div className="home-page">
          <div id="section-1">
            
            <Grid container spacing={1}>
              <Grid item xs={12}  md={4}>
                <img id="home-img" src={self} alt="intro-img"/>
              </Grid>

              <Grid item xs={12} md={8}>
                <div className="intro-text">
                  <h2 id="name">Erlisa Kulla</h2>
                  <p id="text">
                    <a href="https://github.com/erlisakulla" target="_blank" rel="noreferrer"><b style={{color:'#3f51b5'}} id="software">Software Developer</b></a> and <a href="https://erlisakulla.artstation.com" target="_blank" rel="noreferrer"><b style={{color:'#f50057'}} id="artist">Artist</b></a> with a great passion for learning and creative exploration.
                  </p>
                  <a href="#skills">
                    <Button 
                      type="secondary" 
                      shape="round" 
                      size="large"
                      className="link-btn"
                      icon={<FiChevronsRight size={20} style={{marginRight:'10px'}} id="icon-arrow"/>}
                    >
                      Get to know me
                    </Button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>

          <section id="skills" name="skills">
            <h1 style={{paddingBottom:30}}>Skills</h1>

            <div id="can-do">
              {/* <h3 style={{paddingBottom:30}}>What I can do</h3> */}
              <CanDoList/>
            </div>

            {/* <div id="learning">
              <h3 style={{paddingBottom:30}}>What I am learning</h3>
              <LearningList/>
            </div> */}
          </section>

          <section id="about" name="about">
            <h1>About Me</h1>
            <p style={{fontSize:'16px'}} id="about-text">
              I am from Albania, currently located in 📍 Munich, Germany. 
              My biggest passions are programming and art and I am always looking for ways to combine the two.
              I love 🎨 painting, 🎶 listening to music, 🎸 playing bass, 🎥 watching animated movies and shows, and of course 💻 programming.
            </p>

            <div id="experience">
              <h3 style={{padding:30}}>Experience</h3>
              <Experience/>
            </div>

            <div id="education">
              <h3 style={{padding:30}}>Education</h3>
              <Education/>
            </div>
          </section>

          <section id="projects" name="projects">
            <h1 style={{paddingBottom:30}}>Projects</h1>
            <Projects/>
            <a href="https://github.com/erlisakulla?tab=repositories" target="_blank" rel="noreferrer">
              <Button 
                type="secondary" 
                shape="round" 
                size="large"
                id="more-btn"
                style={{marginTop:'50px'}}
                icon={<FiMoreHorizontal style={{marginRight:'10px'}}/>}
              >
                More
              </Button>
            </a>
          </section>

          <div id="contact" name="contact">
            <h1 style={{fontWeight:700}}>Let's get in touch!</h1>
            <h5 style={{paddingBottom:30, opacity:0.8}}>#OpenToWork</h5>
            <ContactMe/>
          </div>
        </div>

        <BackTop>
          <div><FiChevronUp id="back-top-btn" size={40}/></div>
        </BackTop>
      </>
    );
  }
}

export default Home;