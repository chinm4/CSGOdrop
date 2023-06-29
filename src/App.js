import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Roulette from './pages/Roulette';
import Unboxing from './pages/Unboxing';
import Pvp from './pages/Pvp';
import Crash from './pages/Crash';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/roulette" element={<Roulette />}/>
          <Route exact path="/unboxing" element={<Unboxing />}/>
          <Route exact path="/pvp" element={<Pvp />}/>
          <Route exact path="/crash" element={<Crash />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
