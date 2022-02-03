import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../Buttons/PrimaryButton';
import Image from '../../images/avatar.jpg';
import Image2 from '../../images/avatar2.png';
import Image3 from '../../images/avatar3.jpg';
import Image4 from '../../images/avatar4.jpg';
import ContactItem from './ContactItem';
import AddContact from './AddContact';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 2rem;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  margin-top: 1rem;
  border-top: 0.5px solid white;
  height: 90vh;
  max-width: 400px;
  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 2rem;
  }
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
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
`;

const Button = styled(PrimaryButton)`
  width: 100%;
  margin: 1rem 0rem;
`;

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Container>
      <Wrapper>
        <Button callback={() => setIsOpen(!isOpen)} text="Add new contact" />
        {isOpen && <AddContact setIsOpen={setIsOpen} />}
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
