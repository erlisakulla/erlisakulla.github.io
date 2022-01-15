import React from 'react';
import '../Home/HomePage.css';
import { Card } from 'antd';
import { Grid } from '@material-ui/core';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export const Projects = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} className="projects-grid">
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a href="https://github.com/jacobs-hack/static-page" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a href="https://jhack2021.herokuapp.com"><FiGlobe key="link" size={15}/></a>,
            ]}
          >
            <h5>jacobsHack!2021 Website</h5>
            <hr/>
            Quiz using hand detection user input.<br></br>
            <i style={{color:'#3f51b5'}}>HTML, CSS, JavaScript, Github Pages</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className="projects-grid">
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a href="https://github.com/jacobs-hack/registration-portal-2021" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a href="https://jacobshack.com"><FiGlobe key="link" size={15}/></a>,
            ]}
          >
            <h5>jacobsHack!2021 Registration Page</h5>
            <hr/>
            Quiz using hand detection user input.<br></br>
            <i style={{color:'#f50057'}}>React, Express, Node, MongoDB, Heroku</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className="projects-grid">
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a href="https://github.com/erlisakulla/thumbs-up-down-python-opencv-mediapipe" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
            ]}
          >
            <h5>Hand Detection Quiz</h5>
            <hr/>
            Quiz using hand detection user input.<br></br>
            <i style={{color:'#3f51b5'}}>Python, OpenCV, Mediapipe</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className="projects-grid" style={{justifyContent:'center'}}>
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="personal-website"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a href="https://github.com/erlisakulla/site" target="_blank" rel="noreferrer"><FiGithub key="github" size={15}/></a>,
              <a href="https://erlisakulla.github.io"><FiGlobe key="link" size={15}/></a>,
            ]}
          >
            <h5>Personal Website</h5>
            <hr/>
            The repository for this website.<br></br>
            <i style={{color:'#f50057'}}>React, HTML, CSS</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className="projects-grid">
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a title="4th Sprint" href="https://github.com/erlisakulla/bdg-django-react-xp4" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a title="3rd Sprint" href="https://github.com/erlisakulla/bdg-django-react-xp3" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a title="2nd Sprint" href="https://github.com/erlisakulla/bdg-django-xp2" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a title="1st Sprint" href="https://github.com/erlisakulla/bdg-django-xp1" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
            ]}
          >
            <h5>Beer Distribution Game</h5>
            <hr/>
            Implementation of the Beer Distribution Game.<br></br>
            <i style={{color:'#3f51b5'}}>React, Django, HTML, CSS</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className="projects-grid">
          <Card
            className="project-card"
            hoverable
            style={{width:400, left:'0', right:'0', margin:'auto', borderRadius:'4px'}}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
            //   />
            // }
            actions={[
              <a href="https://github.com/erlisakulla/Computer-Science-HL-IA" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
            ]}
          >
            <h5>IBDP Computer Science HL IA</h5>
            <hr/>
            Job/internship seeking platform. <br></br>
            <i style={{color:'#f50057'}}>Java, SQLite</i>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};