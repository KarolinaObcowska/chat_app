import React from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import NewConversation from './NewConversation';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 2rem;
`;
const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Conversations />
      <NewConversation />
    </Wrapper>
  );
};

export default Dashboard;
