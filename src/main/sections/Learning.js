import React from 'react';
import '../Home/HomePage.css';
import { Grid } from '@material-ui/core';
import { Card } from 'antd';
import { SiBlender, SiHoudini, SiUnity, SiUnrealengine, SiOpenai, SiPython, SiTensorflow } from 'react-icons/si';

export const LearningList = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={4}>
        <Card className="cando-card">
          <h5>Artificial Intelligence</h5>
          <hr/>
          Researching on the topic of <b>Generative AI</b> (DALL-E, Stable Diffusion, GPT-3, ChatGPT). 

          <div style={{paddingTop:'20px'}} className="icons2">
            <SiOpenai size={25}/>
            <SiPython size={25}/>
            <SiTensorflow size={25}/>
          </div>
        </Card>
      </Grid>
      

      <Grid item xs={12} md={4}>
        <Card elevation={3} className="cando-card">
          <h5>Game Development</h5>
          <hr/>
          Currently learning how to create games using <b>Unity</b> and <b>Unreal Engine</b>.
          
          <div style={{paddingTop:'20px'}} className="icons2">
            <SiUnity size={25}/>
            <SiUnrealengine size={25}/>
          </div>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card elevation={3} className="cando-card">
          <h5>3D Modelling and VFX</h5>
          <hr/>
          Learning basic of 3D modelling using <b>blender</b> and <b>Houdini</b> beacuse I truly love animated movies.

          <div style={{paddingTop:'20px'}} className="icons2">
            <SiBlender size={25}/>
            <SiHoudini size={25}/>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};