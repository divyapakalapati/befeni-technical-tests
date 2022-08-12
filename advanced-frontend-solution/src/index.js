import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Fabrics} from './Fabrics';
import {FabricDetails} from './FabricDetails';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path='fabrics' element={<App/>} />
      <Route path='fabrics/:code' element={<App/>} />
    </Routes>
    </BrowserRouter>
);