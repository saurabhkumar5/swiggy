import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Body from './Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <Routes path='/' element={<App />}>
          <Route path='' element={<Body />}></Route>
          <Route path='about' element={<About/>}></Route>
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


