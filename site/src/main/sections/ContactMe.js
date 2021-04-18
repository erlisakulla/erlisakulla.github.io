import React from 'react';
import '../Home/HomePage.css';
import { Form, Input, Button, Space } from 'antd';
import { Grid } from '@material-ui/core';

class ContactMe extends React.Component {
  render() {
    return (
      <div id="contact-form-cont">
        <Form name="complex-form">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Form.Item style={{ marginBottom: 0 }}>
                <Form.Item
                  name="first-name"
                  rules={[{ required: false }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <Input placeholder="First Name" />
                </Form.Item>

                <Form.Item
                  name="last-name"
                  rules={[{ required: false }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Form.Item>
              
              <Form.Item>
                <Space>
                  <Form.Item
                    name="email"
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <Input style={{ width:'100%' }} placeholder="Email" type="email"/>
                  </Form.Item>
                </Space>
              </Form.Item>

              <Form.Item>
                <Space>
                  <Form.Item
                    name="subject"
                    noStyle
                    rules={[{ required: false }]}
                  >
                    <Input style={{ width:'100%' }} placeholder="Subject" />
                  </Form.Item>
                </Space>
              </Form.Item>

            </Grid>

            <Grid item xs={6}>
              <Form.Item>
                <Space>
                  <Form.Item
                    name="message"
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea  style={{ width:'100%' }} placeholder="Write your message here..."/>
                  </Form.Item>
                </Space>
              </Form.Item>

              <Form.Item colon={false}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Grid>
          </Grid>

          

          

          
        </Form>
      </div>
    );
  }
  
};

export default ContactMe;