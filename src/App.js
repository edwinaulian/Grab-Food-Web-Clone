import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './app/home/home';
import { NoMatch } from './app/noMacthPage/noMatch';
import { AuthProvider } from './app/common/global-service/auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;