import React, { useState } from 'react';
import '../Home/HomePage.css';
import { Grid, Collapse, Tooltip } from '@material-ui/core';
import { Card, Progress } from 'antd';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiPython, DiJavascript, DiJava, DiReact, DiNodejsSmall, DiMysql } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremiere, SiAdobexd } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { SiDjango, SiCplusplus } from 'react-icons/si';

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
      <Grid item xs={4}>
        <Card className="cando-card">
          <h5>UI/UX Design</h5>
          <hr/>
          Design and prototype websites and apps using tools like <b>Figma</b> and <b>Adobe XD</b>. 
          Expertise in design tools like <b>Adobe Photoshop</b> and <b>Illustrator</b>.

          <div style={{paddingTop:'20px'}} className="icons" onClick={handleExpandClick1}>
            {
              (uiUxExpand === false) ?
              <div className="just-icons">
                <FiFigma size={25}/>
                <SiAdobephotoshop size={25}/>
                <SiAdobeillustrator size={25}/>
                <SiAdobepremiere size={25}/>
                <SiAdobexd size={25}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={uiUxExpand} timeout="auto" unmountOnExit>
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
                    <SiAdobepremiere size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Adobe Premiere Pro
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiAdobexd size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Adobe XD
                    <Tooltip title="5/10" placement="right" arrow>
                      <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/> 
                    </Tooltip>
                  </Grid>
                </Grid>
              </Collapse>
            </div>
          </div>
        </Card>
      </Grid>
      

      <Grid item xs={4}>
        <Card elevation={3} className="cando-card">
          <h5>Frontend Development</h5>
          <hr/>
          Design and build static and responsive websites using <b>HTML</b>, pure <b>CSS</b>, <b>Javascript</b>, <b>jQuery</b> as well as <b>React.js</b> and <b>Bootstrap</b>. Build frontend frameworks to handle interactions with backend.
          
          <div style={{paddingTop:'20px'}} className="icons"  onClick={handleExpandClick2}>
            {
              (frontendExpand === false) ?
              <div className="just-icons">
                <AiFillHtml5 size={25}/>
                <DiCss3 size={25}/>
                <DiJavascript size={25}/>
                <BsFillBootstrapFill size={20}/>
                <DiReact size={25}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={frontendExpand} timeout="auto" unmountOnExit>
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
                    Javascript
                    <Tooltip title="8/10" placement="right" arrow>
                      <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <BsFillBootstrapFill size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Bootstrap
                    <Tooltip title="8/10" placement="right" arrow>
                      <Progress percent={80} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiReact size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    React.js
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Collapse>
            </div>
          </div>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card elevation={3} className="cando-card">
          <h5>Backend Development</h5>
          <hr/>
          Build dynamic services that require database or API management using <b>Django</b>, <b>Django REST Framework</b> and <b>Node.js</b>. Experience in general use of <b>Java</b>, <b>C/C++</b> and <b>Python</b>.

          <div style={{paddingTop:'20px'}} className="icons" onClick={handleExpandClick3}>
            {
              (backendExpand === false) ?
              <div className="just-icons">
                <SiCplusplus size={25}/>
                <DiMysql size={25}/>
                <DiJava size={25}/>
                <DiPython size={25}/>
                <SiDjango size={25}/>
                <DiJava size={25}/>
                <DiNodejsSmall size={25}/>
              </div> :
              null
            }
            <div className="skills-progress">
              <Collapse in={backendExpand} timeout="auto" unmountOnExit>
                <Grid container spacing={5}>
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
                    <DiMysql size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    MySQL
                    <Tooltip title="7/10" placement="right" arrow>
                      <Progress percent={70} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiJava size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Java
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiPython size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Python
                    <Tooltip title="6/10" placement="right" arrow>
                      <Progress percent={60} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <SiDjango size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Django
                    <Tooltip title="5/10" placement="right" arrow>
                      <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiJava size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Java
                    <Tooltip title="5/10" placement="right" arrow>
                      <Progress percent={50} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                  </Grid>

                  <Grid item xs={2}>
                    <DiNodejsSmall size={25}/>
                  </Grid>
                  <Grid item xs={10}>
                    Node.js
                    <Tooltip title="4/10" placement="right" arrow>
                      <Progress percent={40} showInfo={false} strokeColor="grey" trailColor="#dbdbdb"/>
                    </Tooltip>
                    
                  </Grid>
                </Grid>
              </Collapse>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};