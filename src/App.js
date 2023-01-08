import React from 'react'
import './App.css'
import Navbar from './component/Navbar'

// Contents
import Home from './contents/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
          {/* <Route exact path="/"> </Route> */}
      </div>
    </Router>
  );
}

export default App;
