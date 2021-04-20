import React from 'react';
import '../Home/HomePage.css';
import { Form, Input, Button, notification } from 'antd';
import { Grid } from '@material-ui/core';
import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.sendEmail = this.sendEmail.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    }
  };

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        notification.open({
          message: 'Your email was sent successfully!',
          description:
            'I will get back to you as soon as possible :)'
        });
      }, (error) => {
        notification.open({
          message: "Your email couldn't be sent :("
        });
        console.log(error.data);
      }
    );

    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  onChangeInput(e) {
    const cred = this.state;
    cred[e.target.name] = e.target.value;
    this.setState(cred);
  }

  render() {
    return (
      <div id="contact-form-cont">
        <form name="complex-form" method="post" onSubmit={this.sendEmail}>
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
                        value={this.state.first_name}
                        onChange={this.onChangeInput}
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
                        value={this.state.last_name}
                        onChange={this.onChangeInput}
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
                    value={this.state.email}
                    onChange={this.onChangeInput}
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
                    value={this.state.subject}
                    onChange={this.onChangeInput}
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
                  <textarea className="ant-input"
                    required
                    name="message" 
                    id="message" 
                    placeholder="If you simply want to say hi, you want to collaborate, or you want to ask me something, don't hesitate to message me..."
                    value={this.state.message}
                    onChange={this.onChangeInput}
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