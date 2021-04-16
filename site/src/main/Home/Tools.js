import React from 'react';
import './HomePage.css';
import { Progress } from 'antd';
import { DiUnitySmall } from 'react-icons/di';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremiere, SiAdobexd, SiBlender } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import Grid from '@material-ui/core/Grid';

export const ToolsListView = () => {
  return(
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <SiAdobephotoshop size={50} color='#013f8a'/>
      </Grid>
      <Grid item xs={10}>
        <div className="skill">
          Photoshop
          <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
        </div>
      </Grid>

      <Grid item xs={2}>
        <SiAdobeillustrator size={50} color='#e86c1e'/>
      </Grid>
      <Grid item xs={10}>
        Illustrator
        <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <SiAdobepremiere size={50} color='#7a07ab'/>
      </Grid>
      <Grid item xs={10}>
        Premiere Pro
        <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <SiAdobexd size={50} color='#cc0ec9'/>
      </Grid>
      <Grid item xs={10}>
        XD
        <Progress percent={30} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <FiFigma size={45} color='#cc0e3b'/>
      </Grid>
      <Grid item xs={10}>
        Figma
        <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiUnitySmall size={50} color='black'/>
      </Grid>
      <Grid item xs={10}>
        <div className="skill">
          Unity
          <Progress percent={30} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
        </div>
      </Grid>
      
      <Grid item xs={2}>
        <SiBlender size={50} color='#e67505'/>
      </Grid>
      <Grid item xs={10}>
        Blender
        <Progress percent={30} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>
    </Grid>
  );
};

export const ToolsIconsView = () => {
  return (
    <div className="tool-icons">
      <SiAdobephotoshop size={50} color='#013f8a' className="adobe-icon"/>
      <SiAdobeillustrator size={50} color='#e86c1e' className="adobe-icon"/>
      <SiAdobepremiere size={50} color='#7a07ab' className="adobe-icon"/>
      <SiAdobexd size={50} color='#cc0ec9' className="adobe-icon"/>
      <FiFigma size={45} color='#cc0e3b'/>
      <DiUnitySmall size={50} color='black'/>
      <SiBlender size={50} color='#e67505'/>
    </div>
  );
};