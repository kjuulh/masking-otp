import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SecondFactorPage from '../pages/SecondFactorPage';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

interface Props {}

const Body: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path='/login'>
        <LoginPage></LoginPage>
      </Route>
      <Route path='/2ndFactor'>
        <SecondFactorPage />
      </Route>
      <Route path='/dashboard'>
        <DashboardPage></DashboardPage>
      </Route>
      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route path='*'>
        <NotFoundPage></NotFoundPage>
      </Route>
    </Switch>
  );
};

export default Body;
