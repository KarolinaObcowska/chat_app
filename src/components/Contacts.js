import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
`;

const Title = styled.h2`
  color: white;
  margin-top: 2rem;
  font-weight: 1;
  font-size: 1.2rem;
`;

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
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

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <List>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
        <ListItem>
          <ItemDetail>Karolina Obcowska</ItemDetail>
          <LastMessage>karolina@interia.pl</LastMessage>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Contacts;
