import React from 'react';
import './HomePage.css';
import { Card, Col, Row, Image } from 'antd';

export const LearningList = () => {
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Card className="cando-card">
          <Image width={200} height={200} src="error"/>
          <h4>Mobile App Development</h4>
          <hr/>
          <p>
            I have 
          </p>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="cando-card">
          <Image width={200} height={200} src="error"/>
          <h4>Game Development</h4>
          <hr/>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card className="cando-card">
          <Image width={200} height={200} src="error"/>
          <h4>3D modelling and VFX</h4>
          <hr/>
          Card content
        </Card>
      </Col>
    </Row>
  );
};