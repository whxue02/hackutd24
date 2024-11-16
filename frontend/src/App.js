import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Analyze from './pages/analyze';
import Upload from './pages/upload';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
        <Routes>
          <Route path="/analyze/" element={<Analyze />} />
        </Routes>
        <Routes>
          <Route path="/upload/" element={<Upload />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
