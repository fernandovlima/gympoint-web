import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Registration from '../pages/Registration';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/registration" component={Registration} />
    </Switch>
  );
}
