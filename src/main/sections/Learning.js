import React from 'react';
import '../Home/HomePage.css';
import { Grid } from '@material-ui/core';
import { Card } from 'antd';
import { SiBlender, SiFlutter, SiFirebase, SiHoudini, SiCsharp, SiUnity, SiUnrealengine, SiVueDotJs } from 'react-icons/si';

export const LearningList = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <Card className="cando-card">
          <h5>Mobile App Development</h5>
          <hr/>
          Learning how to create mobile apps using frameworks such as <b>Flutter.js</b>, <b>Vue.js</b>, <b>React Native</b> and <b>Firebase</b>. I have many ideas and I want to learn how to bring them to life using these tools.

          <div style={{paddingTop:'20px'}} className="icons2">
            <SiVueDotJs size={25}/>
            <SiFlutter size={25}/>
            <SiFirebase size={25}/>
          </div>
        </Card>
      </Grid>
      

      <Grid item xs={4}>
        <Card elevation={3} className="cando-card">
          <h5>Game Development</h5>
          <hr/>
          I truly appreaciate video games and I aspire to become part of the game dev industry once I acquire more knowledge in the field. Currently learning how to create games using <b>C#</b> for <b>Unity</b>, and <b>Unreal Engine</b>.
          
          <div style={{paddingTop:'20px'}} className="icons2">
            <SiCsharp size={25}/>
            <SiUnity size={25}/>
            <SiUnrealengine size={25}/>
          </div>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card elevation={3} className="cando-card">
          <h5>3D Modelling and VFX</h5>
          <hr/>
          Learning basic of 3D modelling using <b>blender</b> and <b>Maya</b> beacuse I truly love animated movies. I also aim to learn how to build pipelines that facilitate the tasks of animating models using <b>PyMEL</b>.

          <div style={{paddingTop:'20px'}} className="icons2">
            <SiBlender size={25}/>
            <SiHoudini size={25}/>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};