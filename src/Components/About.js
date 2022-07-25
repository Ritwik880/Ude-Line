import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='max-width'>
                    <div className='Emax-width'>
                        <div className='aMainHeading'>
                            <div className='cont'>
                                A platform for you to achieve your <span>Dream college</span>
                            </div>
                        </div>
                        <div className='aCardCont'>
                            <Container>
                                <Row>
                                    <Col className='aCol aC1'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a1'>
                                                    <img src='acricle1.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >Personalised Guidance </h1>
                                            <div className='ap'>
                                                1:1 mentorship from our experts
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className='aCol aC2'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a2'>
                                                    <img src='acricle2.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >Course Selection </h1>
                                            <div className='ap'>
                                                We provide you with every information that will help you see the bigger picture and make your choice better.
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col className='aCol aC1'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a3'>
                                                    <img src='acricle3.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >College Selection  </h1>
                                            <div className='ap'>
                                                Get to know each and everything about your dream college from the current alumni studying over there.
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className='aCol aC2'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a4'>
                                                    <img src='acricle4.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >Financial Assistance  </h1>
                                            <div className='ap'>
                                                Loan and Scholarship assistance
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col className='aCol aC1'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a5'>
                                                    <img src='acricle5.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >Admission Assistance </h1>
                                            <div className='ap'>
                                                We provide you with details of admission in various colleges across India.
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className='aCol aC2'>
                                        <div className='aCard'>
                                            <div className='ahead'>
                                                <div className='aCircle a6'>
                                                    <img src='acricle6.png' alt='card png' />
                                                </div>
                                            </div>
                                            <h1 >Student Community </h1>
                                            <div className='ap'>
                                                We provide you with details of admission in various colleges across India.
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                            </Container>

                        </div>
                    </div>
                </div>
            </div>
            <div className='connect'>
                <div className='max-width cCont'>
                    <div className='cMhead'>
                        Let’s connect
                    </div>
                    <div className='cp'>
                        Udeline provides a special feature where you can connect with people from your dream college.
                        Get a completely genuine review of your college.
                    </div>
                    <div className='cbtn'>
                        <Button>Let’s Try Basic counselling Session</Button>
                    </div>
                    <div className='cImg'>
                        <img src='connectimg.png' alt='' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About