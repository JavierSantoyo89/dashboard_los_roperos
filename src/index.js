import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Router} from 'react-router-dom'


import App from './Routes/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);