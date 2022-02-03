/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Hero from '../components/Hero';
import Page404 from '../components/Page404';
import Login from '../components/Login';
import ContactList from '../components/Contact/ContactList';
import Conversation from '../components/Conversation';
import Dashboard from '../components/Dashboard';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Hero />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="*" exact element={<Page404 />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/contact" exact element={<ContactList />} />
        <Route path="/conversation" exact element={<Conversation />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routing;
