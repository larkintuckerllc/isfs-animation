import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import getQueryString from './util/getQueryString';
import { BASE_URL_HTTP, BASE_URL_SOCKET } from './config';
import { setBaseHttp, setBaseSocket } from './apis/thr0w';
import configureStore from './configureStore';
import App from './components/App';
import './index.scss';

const wall = getQueryString('wall');
if (wall !== null) {
  setBaseHttp(BASE_URL_HTTP);
  setBaseSocket(BASE_URL_SOCKET);
}
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('frame__content'),
);
