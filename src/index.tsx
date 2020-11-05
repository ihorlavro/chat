import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Styled from 'styled-components';
import theme from 'utils/styled/theme';
import store from 'redux/store';
import App from 'components/App';
import ErrorBoundry from 'components/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Styled.ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </Styled.ThemeProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
