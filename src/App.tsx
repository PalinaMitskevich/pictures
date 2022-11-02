import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { Picture } from './pages/Picture'
import { paths } from './constants'
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.PICTURE} element={<Picture />} />
        </Routes>
      </div>
  );
}

export default App;
