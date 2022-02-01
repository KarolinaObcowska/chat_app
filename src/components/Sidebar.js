import React from 'react';
import styled from 'styled-components';
import { CgLogOut } from 'react-icons/cg';
import { BiConversation } from 'react-icons/bi';
import { IoIosContacts } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Wrapper = styled.aside`
  height: 100vh;
  min-width: 4rem;
  max-width: 4rem;
  position: static;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  color: white;
`;

const ListItem = styled(Link)`
  padding: 2rem 0rem;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <List>
        <ListItem to="/">
          <AiOutlineHome size={25} />
        </ListItem>
        <ListItem to="/dashboard">
          <BiConversation size={25} />
        </ListItem>
        <ListItem to="/contact">
          <IoIosContacts size={25} />
        </ListItem>
        <ListItem to="/">
          <CgLogOut size={25} />
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
