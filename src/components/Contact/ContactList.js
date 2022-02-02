import React from 'react';
import styled from 'styled-components';
import Image from '../../images/avatar.jpg';
import Image2 from '../../images/avatar2.png';
import Image3 from '../../images/avatar3.jpg';
import Image4 from '../../images/avatar4.jpg';
import ContactItem from './ContactItem';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
  height: 90vh;
  padding-bottom: 4rem;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  border-bottom: 0.5px solid white;
  border-top: 0.5px solid white;
`;

const ContactList = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ContactItem
            image={Image}
            email="hello@wp.pl"
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image2}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image3}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image4}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image2}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image2}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image2}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image2}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
          <ContactItem
            email="hello@wp.pl"
            image={Image}
            name="Karolina Obcowska"
            lastMessage="Hello"
          />
        </List>
      </Wrapper>
    </Container>
  );
};

export default ContactList;
