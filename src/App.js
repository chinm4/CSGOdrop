import React, { Component, Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
