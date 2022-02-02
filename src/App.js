import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import Routing from './routes/Routing';
import Sidebar from './components/Sidebar';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './components/Login';

function App() {
  const [data, setData] = useLocalStorage('email');

  return (
    <div className="App">
      <BrowserRouter>
        {data ? (
          <>
            {' '}
            <Sidebar />
          </>
        ) : (
          <Login onEmailSubmit={setData} />
        )}
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
