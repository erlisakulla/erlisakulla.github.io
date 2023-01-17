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
import { FiGlobe } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import jobs from '../content/jobs.json';

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

	const [expanded, setExpanded] = useState([]); 

	const handleExpandClick = (job) => {
		if (!expanded.includes(job)) {
			setExpanded(current => [...current, job]);
		}
		else if (expanded.includes(job)) {
			setExpanded(expanded.filter(j => j !== job))
		}
		console.log(expanded);
	};

	const jobsList = jobs.slice(0).reverse(); 

	return (
		<Timeline align="alternate">
			{
				jobsList.map(job => (
					(job.id % 2 === 0) ? 
					<>
						{/* LEFT ITEMS */}
						<div className="time">{job.duration}</div>
						<TimelineItem>
							<TimelineOppositeContent id="disappear" className="timeline">
								{job.duration}
							</TimelineOppositeContent>
							{
								(job.id === 0) ? 
								<TimelineSeparator id="disappear">
									<TimelineDot color="primary" variant="outlined" id="disappear"/>
								</TimelineSeparator>
							 :
								<TimelineSeparator id="disappear">
									<TimelineDot color="primary" variant="outlined" id="disappear"/>
									<TimelineConnector className={classes.secondaryTail}/>
								</TimelineSeparator>
							}
							<TimelineContent>
								<Paper elevation={3} className={classes.paper} id="job-paper" onClick={() => handleExpandClick(`job-${job.id}`)}>
									<Grid container spacing={3}>
										<Grid item xs={3}>
											<img id="jsc-logo" src={require(`../../img/${job.id}-logo.png`).default} alt="allianz-logo"/>
										</Grid>
										<Grid item xs={9}>
											<h5>{job.title}</h5>
											<p>
												<i style={{fontSize:'14px'}}>{job.location}</i><br/>
												<a className="weblink" target="_blank" rel="noreferrer" href={job.website}><FiGlobe/></a> {job.company} 
											</p>
										</Grid>
									</Grid>

									<Collapse in={expanded.includes(`job-${job.id}`)} timeout="auto" unmountOnExit id="ui-ux-skills">
										<ul style={{listStyle:'circle', fontSize:'13px', lineHeight:'1.5', paddingTop:'10px', paddingRight:'10px', paddingBottom:'15px'}}>
											{
												job.tasks.map(task => (
													<li dangerouslySetInnerHTML={{__html: task}}></li>
												))
											}
										</ul>
									</Collapse>

									<div style={{textAlign:'center', color:'none'}}>
										{
											(expanded.includes(`job-${job.id}`) === false) ?
											<FiChevronDown size={25} id="backend-expand-arrow"/> :
											<FiChevronUp size={25} id="backend-expand-arrow"/>
										}
									</div>
								</Paper>
								<br/>
							</TimelineContent>
						</TimelineItem>
					</>
					: 
					<>
						{/* RIGHT ITEMS */}
						<div className="time">{job.duration}</div>
						<TimelineItem>
							<TimelineOppositeContent>
								<Paper elevation={3} className={classes.paper} id="job-paper" onClick={() => handleExpandClick(`job-${job.id}`)}>
									<Grid container spacing={3}>
										<Grid item xs={9}>
											<h5>{job.title}</h5>
											<p>
												<i style={{fontSize:'14px'}}>{job.location}</i><br/>
												<a className="weblink" target="_blank" rel="noreferrer" href={job.website}><FiGlobe/></a> {job.company} 
											</p>
										</Grid>
										<Grid item xs={3}>
											<img id="jsc-logo" src={require(`../../img/${job.id}-logo.png`).default} alt="allianz-logo"/>
										</Grid>
									</Grid>

									<Collapse in={expanded.includes(`job-${job.id}`)} timeout="auto" unmountOnExit id="ui-ux-skills">
										<ul style={{listStyle:'circle', fontSize:'13px', lineHeight:'1.5', paddingTop:'10px', paddingRight:'10px', paddingBottom:'15px'}}>
											{
												job.tasks.map(task => (
													<li dangerouslySetInnerHTML={{__html: task}}></li>
												))
											}
										</ul>
									</Collapse>

									<div style={{textAlign:'center', color:'none'}}>
										{
											(expanded.includes(`job-${job.id}`) === false) ?
											<FiChevronDown size={25} id="backend-expand-arrow"/> :
											<FiChevronUp size={25} id="backend-expand-arrow"/>
										}
									</div>
								</Paper>
								<br/>
							</TimelineOppositeContent>
							{
								(job.id === 0) ? 
								<TimelineSeparator id="disappear">
									<TimelineDot color="primary" variant="outlined" id="disappear"/>
								</TimelineSeparator>
							 :
								<TimelineSeparator id="disappear">
									<TimelineDot color="primary" variant="outlined" id="disappear"/>
									<TimelineConnector className={classes.secondaryTail}/>
								</TimelineSeparator>
							}
							<TimelineContent id="disappear" className="timeline">
								{job.duration}
							</TimelineContent>
						</TimelineItem></>
					)
				)
			}
		</Timeline>
	);
}
