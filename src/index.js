import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import "./assets/css/animate.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";
import '../node_modules/bootstrap/dist/js/bootstrap'

ReactDOM.render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
reportWebVitals();
