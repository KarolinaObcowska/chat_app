import React from 'react';
import styled from 'styled-components';
import Conversations from './Conversations';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Conversations />
    </Wrapper>
  );
};

export default Dashboard;
