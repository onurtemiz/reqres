import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from './utils/styles/theme';
import Normalize from './utils/styles/normalize';
import 'antd/dist/antd.css';
import GlobalStyle from './utils/styles/globalStyles';
import axios from 'axios';
import { LoginPage, HomePage } from './components/pages';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/user/reducer';

axios.defaults.baseURL = 'https://reqres.in/api';

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, []);

  return (
    <ThemeProvider theme={light}>
      <Normalize />
      <GlobalStyle />
      {token ? <AuthenticatedRoute /> : <UnAuthenticatedRoute />}
    </ThemeProvider>
  );
}

export default App;

function UnAuthenticatedRoute() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  );
}

function AuthenticatedRoute() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}
