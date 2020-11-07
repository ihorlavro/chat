import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginForm, RegisterForm } from 'components/AuthForms';

const Auth: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </>
  );
};

export default Auth;
