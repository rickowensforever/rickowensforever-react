// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overlay from './overlay';
import Ephemera from './ephemera';
import Garments from './garments';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Overlay>
        <Routes>
          <Route path="/ephemera" element={<Ephemera />} />
          <Route path="/garments" element={<Garments />} />
        </Routes>
      </Overlay>
    </Router>
  );
};

export default App;
