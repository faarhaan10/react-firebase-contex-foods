import { Offcanvas } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-0">
                <Container>
                <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold">Foods</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/foods">Foods</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link disabled>Name</Nav.Link>
                    <Nav.Link as={Link} eventKey={2} to="">
                        Sign Out
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;