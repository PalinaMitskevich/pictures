import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Picture } from './pages/Picture'
import { paths } from './constants'
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.PICTURE} element={<Picture />}>
                <Route path={':id'} element={<Picture />} />
            </Route>
        </Routes>
      </div>
  );
}

export default App;
