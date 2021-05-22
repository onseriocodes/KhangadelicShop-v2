import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { RiShoppingCart2Line, RiUser2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <header>
      <Navbar
        className='py-3'
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href='/'>KHANGADELIC</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                {' '}
                <RiShoppingCart2Line /> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                {' '}
                <RiUser2Line />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
