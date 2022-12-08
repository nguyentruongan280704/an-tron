import './Login.css';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
function Login(props) {
    let { handleSubmit  } = props
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='Container'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="" />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={ {
                    remember: true,
                } }
                onFinish={ onFinish }
            >
                <Form.Item
                    className='username'
                    name="username"
                    rules={ [
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ] }
                >
                    <Input prefix={ <UserOutlined className="site-form-item-icon" /> } placeholder="Username" />
                </Form.Item>
                <Form.Item
                    className='password'
                    name="password"
                    rules={ [
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ] }
                >
                    <Input
                        prefix={ <LockOutlined className="site-form-item-icon" /> }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <div className='remember'>
                            <Checkbox >Remember me</Checkbox>
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </div>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <Link className='register' to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
