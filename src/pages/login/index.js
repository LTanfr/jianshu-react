import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';

class Login extends PureComponent {

  render() {
    const { onFinish, login } = this.props;
    if (!login) {
      return (
        <div className="login-body">
          <Card
            title="登 录"
            className="login-form"
            bordered
            style={{
              textAlign: "center",
              boxShadow: "0 0 8px rgba(0,0,0,.1)"
            }}
          >
            <Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input
                  className="login-form-input"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input
                  className="login-form-input"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                  忘记密码
          </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
          </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      )
    } else {
      return (
        <Redirect to='/'></Redirect>
      )
    }

  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  onFinish(values) {
    // console.log('Received values of form: ', values);
    dispatch(actionCreators.login(values.username, values.password));
  }
})

export default connect(mapState, mapDispatch)(Login);