import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/registration" component={Registration} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
