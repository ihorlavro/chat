import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Styled from 'styled-components';
import ReactModal from 'react-modal';
import theme from 'utils/styled/theme';
import store from 'redux/store';
import App from 'components/App';
import ErrorBoundry from 'components/ErrorBoundry';
import GlobalStyles from 'components/GlobalStyles';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Styled.ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <App />
          </Router>
        </Styled.ThemeProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
