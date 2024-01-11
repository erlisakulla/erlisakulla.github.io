import React, { useState } from 'react';
import '../Home/HomePage.css';
import { Grid, Collapse, Tooltip } from '@material-ui/core';
import { Card, Progress } from 'antd';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiPython, DiJavascript, DiReact, DiNodejsSmall } from 'react-icons/di';
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiTypescript, SiAngular, SiAmazonaws, SiCplusplus, SiMicrosoftazure } from 'react-icons/si';
import { FiFigma, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const CanDoList = () => {
  const [uiUxExpand, setUiUxExpand] = useState(false);
  const [frontendExpand, setrFontendExpand] = useState(false);
  const [backendExpand, setBackendExpand] = useState(false);

  const handleExpandClick1 = () => {
    setUiUxExpand(!uiUxExpand);
  };

  const handleExpandClick2 = () => {
    setrFontendExpand(!frontendExpand);
  };

  const handleExpandClick3 = () => {
    setBackendExpand(!backendExpand);
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={4}>
        <Card className="cando-card">
          {/* <img src={uiux} alt="img" style={{width:200, height:200}}/> */}

          <h5>UI/UX Design</h5>
          <hr/>
          Design and prototype websites and apps using tools like <b>Figma</b>, <b>Adobe Photoshop</b> and <b>Adobe Illustrator</b>.

          <div style={{paddingTop:'20px'}} className="icons" onClick={handleExpandClick1}>
            {
              (uiUxExpand === false) ?
              <div className="just-icons" id="ui-ux-icons">
                <FiFigma size={25}/>
                <SiAdobephotoshop size={25}/>
                <SiAdobeillustrator size={25}/>
                <SiAdobepremierepro size={25}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={uiUxExpand} timeout="auto" unmountOnExit  id="ui-ux-skills">
                <Grid container spacing={5}>
                  <Grid item xs={2}>
                    <FiFigma size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Figma
                    <Tooltip title="9/10" placement="right" arrow> 
                      <Progress percent={90} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAdobephotoshop size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Adobe Photoshop
                    <Tooltip title="8/10" placement="right" arrow> 
                      <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAdobeillustrator size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Adobe Illustrator
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/> 
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAdobepremierepro size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Adobe Premiere Pro
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Collapse>
            </div>
            {
              (uiUxExpand === false) ?
              <FiChevronDown size={25} id="ui-ux-expand-arrow"/> :
              <FiChevronUp size={25} id="ui-ux-expand-arrow"/>
            }
          </div>
        </Card>
      </Grid>
      

      <Grid item xs={12} md={4}>
        <Card elevation={3} className="cando-card">
          <h5>Frontend Development</h5>
          <hr/>
          Building static or dynamic web apps using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>Angular</b> or <b>React</b>.
          
          <div style={{paddingTop:'20px'}} className="icons"  onClick={handleExpandClick2}>
            {
              (frontendExpand === false) ?
              <div className="just-icons" id="frontend-icons">
                <AiFillHtml5 size={25}/>
                <DiCss3 size={25}/>
                <DiJavascript size={25}/>
                <SiTypescript size={25}/>
                <DiReact size={25}/>
                <SiAngular size={22}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={frontendExpand} timeout="auto" unmountOnExit id="frontend-skills">
                <Grid container spacing={5}>
                  <Grid item xs={2}>
                    <AiFillHtml5 size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    HTML
                    <Tooltip title="9/10" placement="right" arrow>
                      <Progress percent={90} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiCss3 size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    CSS
                    <Tooltip title="9/10" placement="right" arrow>
                      <Progress percent={90} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiJavascript size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    JavaScript
                    <Tooltip title="8/10" placement="right" arrow>
                      <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiTypescript size={20}/>
                  </Grid>
                  <Grid item xs={10}>
                  TypeScript
                    <Tooltip title="8/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiReact size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    React
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAngular size={22}/>
                  </Grid>
                  <Grid item xs={10}>
                    Angular
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Collapse>
            </div>
            {
              (frontendExpand === false) ?
              <FiChevronDown size={25} id="frontend-expand-arrow"/> :
              <FiChevronUp size={25} id="frontend-expand-arrow"/>
            }
          </div>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card elevation={3} className="cando-card">
          <h5>Backend Development</h5>
          <hr/>
          Build dynamic services that require database or API management using <b>Python</b>, <b>Node</b>, <b>SQL</b>, <b>AWS</b> or <b>Azure</b>.

          <div style={{paddingTop:'20px'}} className="icons" onClick={handleExpandClick3}>
            {
              (backendExpand === false) ?
              <div className="just-icons" id="backend-icons">
                <DiPython size={25}/>
                <SiCplusplus size={25}/>
                <BsFiletypeSql size={25}/>
                <SiAmazonaws size={25}/>
                <SiMicrosoftazure size={25}/>
                <DiNodejsSmall size={25}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={backendExpand} timeout="auto" unmountOnExit id="backend-skills">
                <Grid container spacing={5}>
                  <Grid item xs={2}>
                    <DiPython size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Python
                    <Tooltip title="5/10" placement="right" arrow>
                      <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiCplusplus size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    C/C++
                    <Tooltip title="7/10" placement="right" arrow>
                      <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <BsFiletypeSql size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    SQL
                    <Tooltip title="7/10" placement="right" arrow>
                      <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAmazonaws size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    AWS
                    <Tooltip title="4/10" placement="right" arrow>
                      <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiMicrosoftazure size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Azure
                    <Tooltip title="4/10" placement="right" arrow>
                      <Progress percent={40} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiNodejsSmall size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Node
                    <Tooltip title="4/10" placement="right" arrow>
                      <Progress percent={40} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Collapse>
            </div>
            {
              (backendExpand === false) ?
              <FiChevronDown size={25} id="backend-expand-arrow"/> :
              <FiChevronUp size={25} id="backend-expand-arrow"/>
            }
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};