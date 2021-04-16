import React from 'react';
import './HomePage.css';
import { Card, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export const ProjectsIntro = () => {
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          This is the description
        </Card>
      </Col>
      <Col span={8}>
      <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          This is the description
        </Card>
      </Col>
      <Col span={8}>
      <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          This is the description
        </Card>
      </Col>
    </Row>
  );
};