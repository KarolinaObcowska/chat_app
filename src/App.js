/* eslint-disable no-unused-vars */
import { BrowserRouter, Outlet } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import Routing from './routes/Routing';
import Sidebar from './components/Sidebar';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isAuthenticated] = useLocalStorage('email');
  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? <Sidebar /> : <Outlet />}
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
