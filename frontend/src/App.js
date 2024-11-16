import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
