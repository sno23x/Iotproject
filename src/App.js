import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Login from './contents/Login';
import Register from './contents/Register';
import Dashboard from './contents/Dashboard';
import Profile from './contents/Profile';


function App() {
  
    return (
    
  <BrowserRouter>
    <div className="App">
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<About />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/login" element={<Login />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />}>
        <Route index element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/profile" element={<Profile />}>
        <Route index element={<Profile />} />
      </Route>
    </Routes> 
      </div>
  </BrowserRouter>
  
  );
  }
  
export default App;