import React from 'react';
import styled from 'styled-components';
import Image from '../images/avatar.jpg';
import Image2 from '../images/avatar2.png';
import Image3 from '../images/avatar3.jpg';
import Image4 from '../images/avatar4.jpg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  min-width: 300px;
  max-width: 400px;
  height: 90vh;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  border-bottom: 0.5px solid white;
  border-top: 0.5px solid white;
`;

const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  margin: 0.5rem 0rem;
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

const Avatar = styled.img`
  display: inline;
  border-radius: 50%;
  wdith: 45px;
  height: 45px;
`;

const Details = styled.div`
  margin-left: 1rem;
`;
const ItemDetail = styled.p`
  color: white;
  font-size: 1rem;
`;

const LastMessage = styled.small`
  font-size: 0.6rem;
  text-align: center;
`;

const Conversations = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Avatar src={Image} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image2} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image3} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image4} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image2} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image3} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image4} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
        <ListItem>
          <Avatar src={Image} />
          <Details>
            <ItemDetail>Karolina Obcowska</ItemDetail>
            <LastMessage>Blablabla</LastMessage>
          </Details>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Conversations;
