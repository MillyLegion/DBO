import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import HomePage from './pages/home/HomePage';
import NavPanel from './components/nav-panel/NavPanel';

import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='layout'>
        <NavPanel />
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
