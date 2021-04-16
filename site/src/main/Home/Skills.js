import React from 'react';
import './HomePage.css';
import { Progress } from 'antd';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiPython, DiJavascript, DiJava, DiReact, DiNodejsSmall, DiMysql } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiDjango, SiCplusplus } from 'react-icons/si';
import Grid from '@material-ui/core/Grid';

export const SkillsListView = () => {
  return(
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <AiFillHtml5 size={50} color='#f5650c'/>
      </Grid>
      <Grid item xs={10}>
        <div className="skill">
          HTML
          <Progress percent={90} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
        </div>
      </Grid>

      <Grid item xs={2}>
        <DiCss3 size={50} color='#2b82ed'/>
      </Grid>
      <Grid item xs={10}>
        <div className="skill">
          CSS
          <Progress percent={90} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
        </div>
      </Grid>

      <Grid item xs={2}>
        <DiJavascript size={50} color='#f2bb16'/>
      </Grid>
      <Grid item xs={10}>
        Javascript
        <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <BsFillBootstrapFill size={45} color='#5e27e8'/>
      </Grid>
      <Grid item xs={10}>
        Bootstrap
        <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiReact size={50} color='#1db5db'/>
      </Grid>
      <Grid item xs={10}>
        React.js
        <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiNodejsSmall size={50} color='#48ba25'/>
      </Grid>
      <Grid item xs={10}>
        Node.js
        <Progress percent={30} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiPython size={50} color='#1e68b0'/>
      </Grid>
      <Grid item xs={10}>
        Python
        <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <SiDjango size={50} color='#046637'/>
      </Grid>
      <Grid item xs={10}>
        Django
        <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiJava size={50} color='#db6225'/>
      </Grid>
      <Grid item xs={10}>
        Java
        <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <SiCplusplus size={50} color='#1f5bd1'/>
      </Grid>
      <Grid item xs={10}>
        C/C++
        <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>

      <Grid item xs={2}>
        <DiMysql size={50} color='#5a80cc'/>
      </Grid>
      <Grid item xs={10}>
        MySQL
        <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
      </Grid>
    </Grid>
  );
};

export const SkillsIconsView = () => {
  return (
    <div className="skill-icons">
      <AiFillHtml5 size={50} color='#f5650c'/>
      <DiCss3 size={50} color='#2b82ed'/>
      <DiJavascript size={50} color='#f2bb16'/>
      <BsFillBootstrapFill size={45} color='#5e27e8'/>
      <DiReact size={50} color='#1db5db'/>
      <DiNodejsSmall size={50} color='#48ba25'/>
      <DiPython size={50} color='#1e68b0'/>
      <SiDjango size={50} color='#046637'/>
      <DiJava size={50} color='#db6225'/>
      <SiCplusplus size={50} color='#1f5bd1'/>
      <DiMysql size={50} color='#5a80cc'/>
    </div>
  );
};
