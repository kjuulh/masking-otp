import React from 'react';
import './LoginPage.scss';
import LoginForm from '../components/LoginForm';
import { Card } from '@material-ui/core';

interface Props {}

const LoginPage: React.FC<Props> = () => {
  return (
    <div className='login-page'>
      <Card className='login-page__card'>
        <LoginForm></LoginForm>
      </Card>
    </div>
  );
};

export default LoginPage;
