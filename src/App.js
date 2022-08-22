import React from 'react';
import './App.css';
import Navbar from './Menu/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import List from './Page/List';
import ColorRender from './Page/ColorRender';
import PixelArt from './Page/PixelArt';
import Calculator from './Page/Calculator'
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/colorRender' element={<ColorRender/>} />
          <Route path='/colorPixel' element={<PixelArt/>} />
          <Route path='/calculator' element={<Calculator/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
