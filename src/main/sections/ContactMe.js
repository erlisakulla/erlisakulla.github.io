import React from 'react';
import '../Home/HomePage.css';
import { Form, Input, Button, notification } from 'antd';
import { Grid } from '@material-ui/core';
import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.sendEmail = this.sendEmail.bind(this);
  };

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        notification.open({
          message: 'Your email was sent successfully!',
          description:
            'Thank you for your email. I will get back to you as soon as possible :)'
        });
      }, (error) => {
        notification.open({
          message: "Your email couldn't be sent :("
        });
        console.log(error.data);
      }
    );
    e.target.reset();
  }

  render() {
    return (
      <div id="contact-form-cont">
        <form name="complex-form" action="#" method="post" onSubmit={this.sendEmail}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Form.Item style={{ marginBottom: 0 }}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Form.Item
                      rules={[{ required: false }]}
                      style={{ display: 'inline-block', width: '100%' }}
                    >
                      <Input 
                        name="first_name" 
                        id="fname" 
                        placeholder="First Name"
                      />
                    </Form.Item>
                  </Grid>

                  <Grid item xs={6}>
                    <Form.Item
                      rules={[{ required: false }]}
                      style={{ display: 'inline-block', width: '100%' }}
                    >
                      <Input 
                        name="last_name" 
                        id="lname" 
                        placeholder="Last Name"
                      />
                    </Form.Item>
                  </Grid>
                </Grid>
              </Form.Item>
              
              <Form.Item>
                <Form.Item
                  noStyle
                  rules={[{ required: true }]}
                >
                  <Input 
                    required
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    type="email"
                  />
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Form.Item
                  noStyle
                  rules={[{ required: false }]}
                >
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                  />
                </Form.Item>
              </Form.Item>
            </Grid>

            <Grid item xs={12} md={6}>
              <Form.Item>
                <Form.Item
                  noStyle
                  rules={[{ required: true }]}
                >
                  <Input.TextArea
                    required
                    name="message" 
                    id="message" 
                    placeholder="If you simply want to say hi, you want to collaborate, or you want to ask me something, don't hesitate to message me..."
                  />
                </Form.Item>
              </Form.Item>
            </Grid>
          </Grid>

          <Form.Item colon={false}>
            <Button id="submit-btn" size="large" shape="round" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </form>
      </div>
    );
  }
};

export default ContactMe;