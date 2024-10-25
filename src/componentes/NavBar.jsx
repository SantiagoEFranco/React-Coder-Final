import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css'
export default function NavBar({ toggleCart }) {
  return (
    <Navbar fixed='top' bg="dark" variant="dark" expand="lg" style={{width:'90vw'}}>
      <Container > 
      <Nav className="ms-auto" style={{display:'flex', justifyContent:'end'}}>
            <CartWidget style={{width:'30px'}} onClick={toggleCart} />
          </Nav>
        <Navbar.Brand as={Link} to="/" style={{ color: '#2871f8', fontWeight: 'bold' }}>
          RPM Tienda
        </Navbar.Brand>

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/Honda' className='links'>Honda</Nav.Link>
            <Nav.Link as={Link} to='/category/Yamaha' className='links'>Yamaha</Nav.Link>
            <Nav.Link as={Link} to='/category/Kawazaki' className='links'>Kawazaki</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
