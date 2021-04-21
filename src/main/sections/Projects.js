import React from 'react';
import '../Home/HomePage.css';
import { Card } from 'antd';
import { Grid } from '@material-ui/core';
import { FiGithub, FiGlobe } from 'react-icons/fi';

export const Projects = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className="projects-grid" style={{justifyContent:'center'}}>
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
            <i style={{color:'#3f51b5'}}>React, HTML, CSS</i>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className="projects-grid">
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
              <a title="3rd Sprint" href="https://github.com/erlisakulla/beer-distribution-game-django-react-xp3" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a title="2nd Sprint" href="https://github.com/erlisakulla/beer-distribution-game-django-xp2" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              <a title="1st Sprint" href="https://github.com/erlisakulla/beer-distribution-game-django-xp1" target="_blank" rel="noreferrer"><FiGithub key="link" size={15}/></a>,
              // <FiGlobe key="github" size={15} style={{color:'rgb(0 0 0 / 45%)'}}/>,
            ]}
          >
            <h5>Beer Distribution Game</h5>
            <hr/>
            Implementation of the Beer Distribution Game.<br></br>
            <i style={{color:'#f50057'}}>React, Django, HTML, CSS</i>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};