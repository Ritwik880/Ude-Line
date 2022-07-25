import React from 'react'
import { Navbar, Nav, Container, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
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
                                    <Nav.Link href="./Home.js" className='navlink1'>Home</Nav.Link>
                                    <Nav.Link href="./About.js">About us</Nav.Link>
                                    <Nav.Link href="./Mentors.js">Mentors</Nav.Link>
                                    <Nav.Link href="./Contact.js">Contact us</Nav.Link>

                                </Nav>
                                <Form className="d-flex">

                                    <Button >Book Free Consultation</Button>
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