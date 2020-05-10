import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenerateObj from './Gen';


if (window.location.pathname == "/") { 
  // render search page
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  // render generate page
  ReactDOM.render(
    <React.StrictMode>
      <GenerateObj />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


