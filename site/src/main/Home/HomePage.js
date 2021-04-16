import React from 'react';
import './HomePage.css';
import self from '../../img/self.png';
import { Card, Row, Col } from 'antd';
import  { SkillsListView, SkillsIconsView } from './Skills';
import  { ToolsListView, ToolsIconsView } from './Tools';
import { CanDoList } from './CanDo';
import { LearningList } from './Learning';
import { ProjectsIntro } from './ProjectsIntro';

/*

TODO
add animation to skills/tools expanding
create illustrations for can do and learning
link github repos
create footer
make link active on current page
add more colors
try out different fonts
style the card components
add fade in transition when content is loading

*/

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.displaySkillsContent = this.displaySkillsContent.bind(this);
    this.displayToolsContent = this.displayToolsContent.bind(this);

    this.state = { 
      cardSkillsContent: false,
      cardToolsContent: false,
    };
  };

  displaySkillsContent() {
    this.setState({cardSkillsContent: !this.state.cardSkillsContent})
    console.log(this.state.cardSkillsContent);
  }

  displayToolsContent() {
    this.setState({cardToolsContent: !this.state.cardToolsContent})
    console.log(this.state.cardToolsContent);
  }

  render() {
    return (
      <>
        <div className="home-page">
          <div id="section-1">
            <img id="home-img" src={self} alt="intro-img"/>

            <div className="intro-text">
              <h2 id="name">Erlisa Kulla</h2>
              <p id="text"><b>Software Developer</b> and <b>Artist</b> with a great passion for learning and creative exploration.</p>
            </div>
          </div>

          <div id="section-2">
            <Row gutter={20}>
              <Col className="card-skills">
                <Card hoverable title="Skills" onClick={this.displaySkillsContent}>
                  {
                    (this.state.cardSkillsContent === false) ?
                    <SkillsIconsView/> :
                    <SkillsListView/>
                  }
                </Card>
              </Col>

              <Col className="card-tools">
                <Card hoverable title="Tools" onClick={this.displayToolsContent}>
                  {
                    (this.state.cardToolsContent === false) ?
                    <ToolsIconsView/> :
                    <ToolsListView/>
                  }
                </Card>
              </Col>
            </Row>    
          </div>

          <div id="section-3">
            <h1>What I can do</h1> 
            <CanDoList/>
          </div>

          <div id="section-4">
            <h1>What I am learning</h1>
            <LearningList/>
          </div>

          <div id="section-5">
            <h1>Projects</h1>: beer game, personal website, hand sign tracker
            <ProjectsIntro/>
          </div>

          <div id="section-6">
            Want to get in touch? Contact Me
          </div>
        </div>
      </>
    );
  }
  
}

export default Home;