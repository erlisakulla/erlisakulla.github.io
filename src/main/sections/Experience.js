import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Grid, Collapse } from '@material-ui/core';
import bmw from '../../img/bmw-logo.png';
import allianz from '../../img/allianz-logo.jpg';
import jsc from '../../img/jsc-logo.jpg';
import idmc from '../../img/idmc-logo.jpg';
import { FiGlobe } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

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

  const [expandAllianz, setAllianzExpand] = useState(false);
  const [expandBMW, setBMWExpand] = useState(false);
  const [expandJSC, setJSCExpand] = useState(false);
  const [expandIDMC, setIDMCxpand] = useState(false);

  const handleExpandClick4 = () => {
    setAllianzExpand(!expandAllianz);
  };

  const handleExpandClick1 = () => {
    setBMWExpand(!expandBMW);
  };

  const handleExpandClick2 = () => {
    setJSCExpand(!expandJSC);
  };

  const handleExpandClick3 = () => {
    setIDMCxpand(!expandIDMC);
  };

  return (
    <Timeline align="alternate">
      <div className="time">August 2020 - Present</div>
      <TimelineItem>
        <TimelineOppositeContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper" onClick={handleExpandClick4}>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <h5>AI-driven User Interfaces Developer - Working Student</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Munich, Germany</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer" href="https://www.allianz.de"><FiGlobe/></a> Allianz 
                </p>

              </Grid>
              <Grid item xs={3}>
                <img id="jsc-logo" src={allianz} alt="allianz-logo"/>
              </Grid>
            </Grid>

            {/* <Collapse in={expandAllianz} timeout="auto" unmountOnExit id="ui-ux-skills">
              
            </Collapse>

            <div style={{textAlign:'center', color:'none'}}>
              {
                (expandAllianz === false) ?
                <FiChevronDown size={25} id="backend-expand-arrow"/> :
                <FiChevronUp size={25} id="backend-expand-arrow"/>
              }
            </div> */}
          </Paper>
          <br/>
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="primary" variant="outlined" id="disappear"/>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent id="disappear">
        September 2020 - Present
        </TimelineContent>
      </TimelineItem>

      <div className="time">June - July 2021</div>
      <TimelineItem>
        <TimelineOppositeContent id="disappear">
          June - July 2021
        </TimelineOppositeContent >
        <TimelineSeparator id="disappear">
          <TimelineDot id="disappear"/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper" onClick={handleExpandClick1}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img id="bmw-logo" src={bmw} alt="bmw-logo"/>
              </Grid>
              <Grid item xs={9}>
                <h5>DevOps Engineer - Internship</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Munich, Germany</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer" href="http://www.bmwgroup.de"><FiGlobe/></a> BMW Group 
                </p>
              </Grid>
            </Grid>

            <Collapse in={expandBMW} timeout="auto" unmountOnExit  id="ui-ux-skills">
              <ul style={{listStyle:'circle', fontSize:'13px', lineHeight:'1.5', paddingTop:'10px', paddingRight:'10px', paddingBottom:'15px'}}>
                <li>
                  Worked in an agile environment as part of the Financial Services Team (Credit Risk Rating)
                </li>
                <li>
                  Fixed issues of Test Automation tasks using SoapUI and Guardean 4
                </li>
                <li>
                  Migrated several jobs from an old Jenkins platform to a new one using Jenkinsfiles
                </li>
              </ul>
            </Collapse>

            <div style={{textAlign:'center', color:'none'}}>
              {
                (expandBMW === false) ?
                <FiChevronDown size={25} id="backend-expand-arrow"/> :
                <FiChevronUp size={25} id="backend-expand-arrow"/>
              }
            </div>
          </Paper>
          <br/>
        </TimelineContent>
      </TimelineItem>

      <div className="time">April 2020 - March 2021</div>
      <TimelineItem>
        <TimelineOppositeContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper"  onClick={handleExpandClick2}>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <h5>Head of Marketing and Design</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Bremen, Germany</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer"  href="https://www.jacobs-startup.com"><FiGlobe/></a> Jacobs Startup Competition 
                </p>

              </Grid>
              <Grid item xs={3}>
                <img id="jsc-logo" src={jsc} alt="jsc-logo"/>
              </Grid>
            </Grid>

            <Collapse in={expandJSC} timeout="auto" unmountOnExit id="ui-ux-skills">
              <ul style={{listStyle:'circle', fontSize:'13px', lineHeight:'1.5', paddingTop:'10px', paddingRight:'10px', paddingBottom:'15px'}}>
                <li>
                  Recruited and led the Marketing Team for JSC 2021
                </li>
                <li>
                  Created visual content: logo design, social media posts, brochures, posters, flyers, videos, recruitment material etc.
                </li>
                <li>
                  Designed and managed the JSC website
                </li>
              </ul>
            </Collapse>

            <div style={{textAlign:'center', color:'none'}}>
              {
                (expandJSC === false) ?
                <FiChevronDown size={25} id="backend-expand-arrow"/> :
                <FiChevronUp size={25} id="backend-expand-arrow"/>
              }
            </div>
          </Paper>
          <br/>
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="primary" variant="outlined" id="disappear"/>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent id="disappear">
          April 2020 - March 2021
        </TimelineContent>
      </TimelineItem>

      <div className="time">January - August 2017</div>
      <TimelineItem>
        <TimelineOppositeContent id="disappear">
          January - August 2017
        </TimelineOppositeContent>
        <TimelineSeparator id="disappear">
          <TimelineDot color="secondary" id="disappear"/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} id="bmw-paper" onClick={handleExpandClick3}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img id="idmc-logo" src={idmc} alt="idmc-logo"/>
              </Grid>
              <Grid item xs={9}>
                <h5>Content Creator</h5>
                <p>
                  <i style={{fontSize:'14px'}}>Tirana, Albania</i><br/>
                  <a className="weblink" target="_blank" rel="noreferrer" href="https://idmc.al/en/"><FiGlobe/></a> Institute for Democracy, Media and Culture 
                </p>
              </Grid>
            </Grid>

            <Collapse in={expandIDMC} timeout="auto" unmountOnExit  id="ui-ux-skills">
              <ul style={{listStyle:'circle', fontSize:'13px', lineHeight:'1.5', paddingTop:'10px', paddingRight:'10px', paddingBottom:'15px'}}>
                <li>
                  Created several videos for their project called “Communist Terminologue”
                </li>
                <li>
                  Animated a 4-minute-long video titled “The Train of Dictatorship” and won 1st place at their national contest 
                  <a href={`https://www.youtube.com/watch?v=7gBE8CJcYOw&t=2s`} target="_blank" rel="noreferrer noopener" style={{paddingLeft:'5px'}}>
                    <FiExternalLink id="video-link"/>
                  </a>
                </li>
              </ul>
            </Collapse>

            <div style={{textAlign:'center', color:'none'}}>
              {
                (expandIDMC === false) ?
                <FiChevronDown size={25} id="backend-expand-arrow"/> :
                <FiChevronUp size={25} id="backend-expand-arrow"/>
              }
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
