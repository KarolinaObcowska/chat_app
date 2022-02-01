import React from 'react';
import { Route, Routes as Routing } from 'react-router-dom';
import AddContact from '../components/Contact/AddContact';
import Dashboard from '../components/Dashboard';
import Hero from '../components/Hero';
import Login from '../components/Login';
import Page404 from '../components/Page404';
import Sidebar from '../components/Sidebar';

const Routes = () => {
  return (
    <>
      <Sidebar />
      <Routing>
        <Route path="/" exact element={<Hero />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/contact" exact element={<AddContact />} />
        <Route path="*" exact element={<Page404 />} />
        <Route path="/login" exact element={<Login />} />
      </Routing>
    </>
  );
};

export default Routes;
