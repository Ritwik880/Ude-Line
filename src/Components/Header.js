import React from 'react'
import { Navbar, Nav, Container, Button, Offcanvas, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} fixed="top" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src='dplogo.png' alt='' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src='dplogo.png' alt='' />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href="/" className='navlink1'>Home</Nav.Link>
                                    <Nav.Link href="/about">About us</Nav.Link>
                                    <Nav.Link href="/mentors">Mentors</Nav.Link>
                                    <Nav.Link href="/contact">Contact us</Nav.Link>
                                </Nav>
                                <Form className="d-flex">

                                    <NavLink to='/bookForm'>
                                        <Button>Book Free Consultation</Button>
                                    </NavLink>

                                </Form>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}
        </>
    )
}

export default Header