import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Auth: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default Auth;
