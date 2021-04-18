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
import jacobs from '../../img/jacobs-logo.png';
import emis from '../../img/emis-logo.png';
// import Collapse from "@material-ui/core/Collapse";

// add collapsible courses and work experience as well

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
        <TimelineOppositeContent>
          <Paper elevation={3} className={classes.paper} id="jacobs-paper">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9}>
                <h5>Jacobs University Bremen</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Bremen, Germany</i><br/>
                  BSc. Computer Science
                </p>
              </Grid>
              <Grid item xs={12} sm={3}>
                <img id="jacobs-logo" src={jacobs} alt="jacobs-logo"/>
              </Grid>
            </Grid>
          </Paper>
          <br/>
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot variant="outlined" id="disappear"/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent id="disappear">
          2019 - 2022
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent>
          <Paper elevation={3} className={classes.paper} id="emis-paper">
            <Grid container spacing={3}>
              <Grid item  xs={12} sm={3}>
                <img id="emis-logo" src={emis} alt="emis-logo"/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <h5>Eastern Mediterranean International School</h5>
                <p>
                <i style={{fontSize:'14px'}}>Tel Aviv, Israel</i><br/>
                  International Baccalaureate Diploma
                </p>
              </Grid>
            </Grid>
          </Paper>
          <br/>
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="primary" id="disappear"/>
        </TimelineSeparator>
        <TimelineContent id="disappear">
          2017 - 2019
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
