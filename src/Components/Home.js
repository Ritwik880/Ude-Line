import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='max-width'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='leftCont'>
                                    <div className='heading'>
                                        <h1>Connect with india's <br /><span>Best Mentor's</span></h1>
                                    </div>
                                    <div className='Para'>
                                        <p>Udeline is an unique platform where we assist you to understand you career path and provide you with every possible opportunities and guidance.
                                            We provide you with a college and course guidebook which will help you choose the best for you related to your interest. </p>
                                    </div>
                                    <div className='tick'>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <div className='box'>
                                                        <div className='boxH'>
                                                            <div className='icons'>
                                                                <span class="material-symbols-rounded">
                                                                    done
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='cont'>
                                                            1 Hr Live session
                                                        </div>
                                                    </div>

                                                </Col>
                                                <Col>
                                                    <div className='box'>
                                                        <div className='boxH'>
                                                            <div className='icons'>
                                                                <span className="material-symbols-rounded">
                                                                    done
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='cont'>
                                                            Profile Evaluation
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='box'>
                                                        <div className='boxH'>
                                                            <div className='icons'>
                                                                <span className="material-symbols-rounded">
                                                                    done
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='cont'>
                                                            University Guide
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col> </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <div className='button'>
                                        <Button>Book a basic Counselling session for ( Rs ₹ 99  only )</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='rightcont'>
                                    <img src='herosPic.png' alt='heros pic' />
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='block'>
                <div className='max-width'>
                    <Container>
                        <Row >
                            <Col className='bcol'>
                                <div className='bCard'>
                                    <div className='bHead'>
                                        <div className='cCircle c1'>
                                            <img src='Union1.png' alt='card png' />
                                        </div>
                                    </div>
                                    <h1 className='h1'>1,000+</h1>
                                    <div className='bp'>
                                        Student’s <br /> Community
                                    </div>

                                </div>
                            </Col>
                            <Col className='bcol'>
                                <div className='bar'>

                                </div>
                            </Col>
                            <Col className='bcol'>
                                <div className='bCard'>
                                    <div className='bHead'>
                                        <div className='cCircle c2'>
                                            <img src='Union2.png' alt='card png' />
                                        </div>
                                    </div>
                                    <h1 className='h2'>5,000+</h1>
                                    <div className='bp'>
                                        Colleges and Universities
                                    </div>

                                </div>
                            </Col>
                            <Col className='bcol'>
                                <div className='bar'>

                                </div>
                            </Col>
                            <Col className='bcol'>
                                <div className='bCard'>
                                    <div className='bHead'>
                                        <div className='cCircle c3'>
                                            <img src='Union3.png' alt='card png' />
                                        </div>
                                    </div>
                                    <h1 className='h3'>500+</h1>
                                    <div className='bp'>
                                        Courses covered
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

export default Home