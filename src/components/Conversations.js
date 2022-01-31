import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  min-width: 300px;
  max-width: 400px;
  height: 90vh;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  width: 100%;
  height: 5rem;
  color: white;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 1rem;
  font-weight: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
  }
`;

const ItemDetail = styled.p`
  color: white;
  font-size: 1rem;
`;

const LastMessage = styled.small`
  font-size: 0.6rem;
`;

const Conversations = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>Blablabla</LastMessage>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Conversations;
