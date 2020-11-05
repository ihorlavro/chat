import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Styled from 'styled-components';
import theme from 'utils/styled/theme';
import App from 'components/App';
import ErrorBoundry from 'components/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Styled.ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </Styled.ThemeProvider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root'),
);
