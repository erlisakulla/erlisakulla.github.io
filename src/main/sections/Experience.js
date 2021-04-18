import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Grid } from '@material-ui/core';
import bmw from '../../img/bmw-logo.png';
import jsc from '../../img/jsc-logo.jpg';
import idmc from '../../img/idmc-logo.jpg';
import { FiGlobe } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent id="disappear">
          June - July 2021
        </TimelineOppositeContent >
        <TimelineSeparator id="disappear">
          <TimelineDot id="disappear"/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <img id="bmw-logo" src={bmw} alt="bmw-logo"/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <h5>Software Engineering Intern</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Munich, Germany</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer"  href="http://www.bmwgroup.de"><FiGlobe/></a> BMW Group 
                </p>
              </Grid>
            </Grid>
          </Paper>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent id="disappear">
          April 2020 - March 2021
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="primary" variant="outlined" id="disappear"/>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9}>
                <h5>Head of Marketing and Design</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Bremen, Germany</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer"  href="https://www.jacobs-startup.com"><FiGlobe/></a> Jacobs Startup Competition 
                </p>

              </Grid>
              <Grid item xs={12} sm={3}>
                <img id="jsc-logo" src={jsc} alt="jsc-logo"/>
              </Grid>
            </Grid>
          </Paper>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent id="disappear">
          January - August 2017
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="secondary" id="disappear"/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <img id="idmc-logo" src={idmc} alt="idmc-logo"/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <h5>Content Creator</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Tirana, Albania</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer" href="https://idmc.al/en/"><FiGlobe/></a> Institute for Democracy, Media and Culture 
                </p>
              </Grid>
            </Grid>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
