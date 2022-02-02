import React from 'react';
import { Route, Routes as Routing } from 'react-router-dom';
import ContactList from '../components/Contact/ContactList';
import Conversation from '../components/Conversation';
import Dashboard from '../components/Dashboard';
import Hero from '../components/Hero';
import Login from '../components/Login';
import Page404 from '../components/Page404';

const Routes = () => {
  return (
    <Routing>
      <Route path="/" exact element={<Hero />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/contact" exact element={<ContactList />} />
      <Route path="*" exact element={<Page404 />} />
      <Route path="/conversation" exact element={<Conversation />} />
      <Route path="/login" exact element={<Login />} />
    </Routing>
  );
};

export default Routes;
