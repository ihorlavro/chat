import * as React from 'react';
import { Route, Switch } from 'react-router';
import Auth from 'pages/Auth';
import Main from 'pages/Main';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={['/login', '/register']} component={Auth} />
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default App;
