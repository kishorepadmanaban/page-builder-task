import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
      </BrowserRouter>
    </div>

  );
}

export default App;