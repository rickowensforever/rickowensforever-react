import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import DateTimeDisplay from './datetimedisplay';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
    <DateTimeDisplay />
  </React.StrictMode>
);
