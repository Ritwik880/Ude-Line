import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='max-width'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='colcont'>
                                    <img src='dplogo.png' alt='' className='logo' />
                                    <h3 className='h3l'>Follow Us On:</h3>
                                </div>
                            </Col>
                            <Col>
                                <div className='colcont'>
                                    <div className='contH ccc'>
                                        <h2>Links</h2>
                                    </div>
                                    <div className='contC ccc'>
                                        <a href=''>Home</a>
                                        <a href=''>About us</a>
                                        <a href=''>Our Mentors</a>
                                        <a href=''>Contat us</a>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='colcont'>
                                    <div className='contH'>
                                        <h2>Contact Details</h2>
                                    </div>
                                    <div className='contC'>
                                        <a href='#'>
                                            <img src='fmail.png' alt='' className='imgC' />
                                            udelineindia@gmail.com
                                        </a>
                                        <a href='#'>
                                            <img src='fcall.png' alt='' className='imgC' />
                                            +91 9311898085
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Footer