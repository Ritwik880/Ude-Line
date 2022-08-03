import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
const Contact = () => {
    const form = {
        border: '1px solid blue',
        borderRadius: '4px'

    };

    return (
        <>
            <section className='minBanner'>
                <div className="row container">
                    <div className="menBanner">
                        <h1 className='ourMen'>Contact us</h1>
                        <img src="/aboutBanner.png" alt="aboutBanner" />
                    </div>
                </div>
            </section>

            <div className='contact'>
                <div className='max-width'>
                    <Container>
                        <Row className='row1'>
                            <Col className='col1'>
                                <img src='contactimg.png' alt='' />
                            </Col>
                            <Col >
                                <Form method='POST' action='https://formspree.io/f/mwkzendl'>
                                    <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                        <Form.Control name='name' type="text" placeholder="Full Name" required autoComplete="offf" />
                                    </Form.Group>
                                    <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                        <Form.Control name='email' type="text" placeholder="Email*" required autoComplete="offf" />
                                    </Form.Group>
                                    <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                        <Form.Control name='number' type="text" placeholder="Phone Number*" required autoComplete="offf" />
                                    </Form.Group>
                                    <Form.Group style={form} className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control name='message' as="textarea" rows={3} placeholder="Message*" required />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" value='send'>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Contact