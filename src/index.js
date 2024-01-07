// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DateTimeDisplay from './datetimedisplay';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DateTimeDisplay/>
  </React.StrictMode>,
  document.getElementById('root')
);
