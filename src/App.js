import { BrowserRouter, Route, Routes as Routing } from 'react-router-dom';

import React from 'react';
import Hero from './components/Hero';
import ContactList from './components/Contact/ContactList';
import Page404 from './components/Page404';
import Sidebar from './components/Sidebar';
import useLocalStorage from './hooks/useLocalStorage';
import Conversation from './components/Conversation';
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
        <Routing>
          <Route path="/main" exact element={<Hero />} />
          <Route path="/contact" exact element={<ContactList />} />
          <Route path="*" exact element={<Page404 />} />
          <Route path="/conversation" exact element={<Conversation />} />
          {/* <Route path="/login" exact element={<Login />} /> */}
        </Routing>
      </BrowserRouter>
    </div>
  );
}

export default App;
