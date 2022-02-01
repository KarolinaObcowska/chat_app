/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import AddContact from './Contact/AddContact';
import Hero from './Hero';
import ContactList from './Contact/ContactList';
import Conversation from './Conversation';
import Login from './Login';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 5rem;
`;
const Dashboard = () => {
  return (
    <Wrapper>
      {/* <AddContact /> */}
      {/* <Hero /> */}
      {/* <ContactList />
      <Conversation /> */}
      <Login />
    </Wrapper>
  );
};

export default Dashboard;
