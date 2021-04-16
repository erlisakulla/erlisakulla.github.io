import React from 'react';
import './HomePage.css';
import { Card, Col, Row, Image } from 'antd';

export const CanDoList = () => {
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Card className="cando-card"  style={{borderRadius:'10px'}}>
          <Image width={200} height={200} src="error"/>
          <h4>UI/UX Design</h4>
          <hr/>
          <p>
            I have 
          </p>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="cando-card"  style={{borderRadius:'10px'}}>
          <Image width={200} height={200} src="error"/>
          <h4>Frontend Development</h4>
          <hr/>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card className="cando-card"  style={{borderRadius:'10px'}}>
          <Image width={200} height={200} src="error"/>
          <h4>Backend Development</h4>
          <hr/>
          Card content
        </Card>
      </Col>
    </Row>
  );
};