/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgLogOut } from 'react-icons/cg';
import { BiConversation } from 'react-icons/bi';
import { IoIosContacts } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { FaWpbeginner } from 'react-icons/fa';

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
  @media (max-width: 768px) {
    position: fixed;
    min-width: 100vw;
    max-height: 4rem;
    bottom: 0;
    z-index: 100;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  color: white;
  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    flex-direction: row;
  }
`;

const ListItem = styled(NavLink)`
  padding: 2rem 0rem;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(7.5px);
  }
  @media (max-width: 768px) {
    height: 100%;
    padding: 0rem;
    justify-content: center;
  }
`;

const Sidebar = () => {
  const [data, setData] = useLocalStorage('email');
  const logout = () => {
    localStorage.removeItem('chating-app-email');
    setData(null);
  };

  return (
    <Wrapper>
      <List>
        <ListItem to="/dashboard" activeClassName="active">
          <AiOutlineHome size={25} />
        </ListItem>
        <ListItem to="/conversation" activeClassName="active">
          <BiConversation size={25} />
        </ListItem>
        <ListItem to="/contact" activeClassName="active">
          <IoIosContacts size={25} />
        </ListItem>
        <ListItem to="/" onClick={logout}>
          <CgLogOut size={25} />
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
