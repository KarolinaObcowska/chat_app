/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

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

const ItemInfo = styled.small`
  font-size: 0.6rem;
  margin: 0.3rem 0rem;
  display: block;
`;

const ContactItem = ({ image, name, lastMessage, email }) => {
  return (
    <ListItem>
      <Avatar src={image} />
      <Details>
        <ItemDetail>{name}</ItemDetail>
        <ItemInfo>{email}</ItemInfo>

        <ItemInfo>{lastMessage}</ItemInfo>
      </Details>
    </ListItem>
  );
};

export default ContactItem;
