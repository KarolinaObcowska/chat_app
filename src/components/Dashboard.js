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
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const Description = styled.p`
  color: white;
  margin-top: 1rem;
`;

const Title = styled.h1`
  color: white;
`;

const Dashboard = () => {
  const userName = localStorage.getItem('chating-app-email');
  const formattedUserName = userName.substring(1, userName.length - 1);
  return (
    <Wrapper>
      <Title>Hello {formattedUserName}!</Title>
      <Description>Now you can start chating with your friends!</Description>
    </Wrapper>
  );
};

export default Dashboard;
