import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware=createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default sagaMiddleware;
