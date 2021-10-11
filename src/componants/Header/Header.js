
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-0">
                <Container>
                <Navbar.Brand as={Link} to="/" className="p-0 fs-2 fw-bold foods-color">Foods</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Nav.Link as={Link} to="/" className="foods-color-hv">Home</Nav.Link>
                        <Nav.Link as={Link} to="/foods" className="foods-color-hv">Foods</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="foods-color-hv">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="foods-color-hv">Contact us</Nav.Link>
                    
                    </Nav>
                    <Nav>
                        <Nav.Link disabled className="foods-color"><i className="fas fa-user-circle"></i> Name</Nav.Link>
                        <Nav.Link as={Link} to="">
                        <i className="fas fa-sign-out-alt foods-color-hv"></i>
                        </Nav.Link>
                        <Nav.Link as={Link}  className="foods-color foods-color-hv">
                        <i className="fas fa-cart-arrow-down"></i>14
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;