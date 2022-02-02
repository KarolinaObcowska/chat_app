import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import Routing from './routes/Routing';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
