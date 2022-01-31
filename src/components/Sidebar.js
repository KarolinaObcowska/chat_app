import React from 'react';
import styled from 'styled-components';
import { CgLogOut } from 'react-icons/cg';
import { BiConversation } from 'react-icons/bi';
import { IoIosContacts } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';

const Wrapper = styled.aside`
  height: 100vh;
  width: 4rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  color: white;
`;

const ListItem = styled.li`
  padding: 2rem 0rem;
  width: 100%;
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
        <ListItem>
          <AiOutlineHome size={25} />
        </ListItem>
        <ListItem>
          <IoIosContacts size={25} />
        </ListItem>
        <ListItem>
          <BiConversation size={25} />
        </ListItem>
        <ListItem>
          <CgLogOut size={25} />
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
