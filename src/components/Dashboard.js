import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
// import ContactList from './Contact/ContactList';
// import Conversation from './Conversation';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-right: 2rem;
  gap: 5rem;
`;
const Dashboard = () => {
  return (
    <Wrapper>
      <Hero />
      {/* <ContactList />
      <Conversation /> */}
    </Wrapper>
  );
};

export default Dashboard;
