import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/Register" element={<Register />}>
      </Route>
      <Route exact path="/Login" element={<Login />}>
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
