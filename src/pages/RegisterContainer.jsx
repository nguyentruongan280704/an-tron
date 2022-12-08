import { message } from 'antd';
import e from 'cors';
import React, { useState, useEffect } from 'react';
import Register from "../components/Register/Register"

function RegisterContainer() {

  const onFinish = (values) => {
    console.log(values);
    const data = {
      name: values.username,
      gmail: values.email,
      phone: values.Phone,
      password: values.password
    };
    fetch('http://127.0.0.1:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log('Received values of form:hhhhh ', values);
  };

  return (<>
    <Register onFinish={ onFinish } />
  </>);
}

export default RegisterContainer;