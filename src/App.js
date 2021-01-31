import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from "./components/header/Header";
import HomePage from './pages/home/HomePage';

import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
