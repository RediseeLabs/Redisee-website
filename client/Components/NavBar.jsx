import React from 'react';
import { Nav, Logo, List, Button } from './Styled/NavBar';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <Nav>
      <Logo
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} />
        <h2>RediSee</h2>
      </Logo>
      <List>
        <Button href="#product">Product</Button>
        <Button href="#about">About</Button>
        <Button href="#team">Team</Button>
      </List>
    </Nav>
  );
};

export default NavBar;
