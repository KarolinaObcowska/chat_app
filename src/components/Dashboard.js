import React from 'react';
import styled from 'styled-components';
// import Contacts from './Contacts';
import Conversations from './Conversations';
import NewConversation from './NewConversation';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-right: 2rem;
`;
const Dashboard = () => {
  return (
    <Wrapper>
      {/* <Contacts /> */}
      <Conversations />
      <NewConversation />
    </Wrapper>
  );
};

export default Dashboard;
