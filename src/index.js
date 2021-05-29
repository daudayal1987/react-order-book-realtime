import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import App from './App';
import Store from './store/Store';

import reportWebVitals from './reportWebVitals';
import WebSocketConnection from './hoc/WebSocketConnection';

ReactDOM.render(
  <Provider store={Store}>
    <WebSocketConnection>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WebSocketConnection>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
