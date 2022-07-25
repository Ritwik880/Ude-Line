import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';

const Mentors = () => {
    return (
        <>
            <div className='mentor'>
                <div className='max-width'>
                    <div className='mHead'>
                        Become a mentor
                    </div>
                    <div className='mp'>
                        The purpose of mentoring is to connect an individual who has a lot of
                        knowledge and experience with someone who hasn’t gained the same
                        knowledge or experience—yet.
                    </div>
                    <div className='mImg'>
                        <img src='mentorimg.png' alt='img' />
                    </div>
                    <div className='mbtn'>
                        <Button className='btn1'>Get started</Button>
                        <Button className='btn2'>Learn more</Button>
                    </div>
                    <div className='mHead Mhead'>
                        Our mentor’s
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className='ocard o1'>
                                    <div className='ocenter'>
                                        <div className='ocircle'>
                                            <img src='saurabh.png' alt='' />
                                        </div>
                                    </div>
                                    <h2>Saurabh Patel</h2>
                                </div>
                            </Col>

                            <Col>
                                <div className='ocard o2'>
                                    <div className='ocenter'>
                                        <div className='ocircle'>
                                            <img src='nishant.png' alt='' />
                                        </div>
                                    </div>
                                    <h2>Nishant Kumar</h2>
                                </div>
                            </Col>

                            <Col>
                                <div className='ocard o3'>
                                    <div className='ocenter'>
                                        <div className='ocircle'>
                                            <img src='anmol.png' alt='' />
                                        </div>
                                    </div>
                                    <h2>Anmol Raj</h2>
                                </div>
                            </Col>

                            <Col>
                                <div className='ocard o4'>
                                    <div className='ocenter'>
                                        <div className='ocircle'>
                                            <img src='ayush.png' alt='' />
                                        </div>
                                    </div>
                                    <h2>Ayush Sharma</h2>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                    <div className='mbtn'>
                        <Button className='btn3'>View all</Button>
                    </div>
                </div>
            </div>
            <div className='stories'>
                <div className='max-width'>
                    <div className='sHead'>
                        Our client sucess Stories
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className='sCard'>
                                    <div className='sCHead'>
                                        <img src='stories.png' alt='' />
                                        <h2>Robert</h2>
                                    </div>
                                    <div className='sp'>
                                        My career was not growing, 3 yrs in job and I was still earning less than a fresher in Tech.
                                        Joined OneLearn.io and recently got a job in Cars24 after 4 months.
                                        It required hard work but a best decision for my life.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='sCard'>
                                    <div className='sCHead'>
                                        <img src='stories.png' alt='' />
                                        <h2>Robert</h2>
                                    </div>
                                    <div className='sp'>
                                        Coming from an economics background with ZERO coding knowledge I was not even sure if this can be a career for me.
                                        By chance I saw about OneLearn on LinkedIn and approached Rehan.
                                        Got convinced that even I can do it and now placed in TransOrg Analytics.
                                        Could not have even imagined this can be my career also
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='quest'>
                <div className='max-width'>
                    <Container>
                        <Row className='row1'>
                            <Col>
                                <img src='questimg.png' alt='' />
                            </Col>
                            <Col>
                                <Container>
                                    <Row className='rowH'>
                                        Questions Udeline wants to ask you
                                    </Row>
                                    <Row >
                                        <div className='rowc'>
                                            Why would you like to waste your crucial time and effort in something you don’t like?
                                        </div>
                                    </Row>
                                    <Row >
                                        <div className='rowc'>
                                            Why do you need to run in the same direction where everyone is going?
                                        </div>
                                    </Row>
                                    <Row >
                                        <div className='rowc'>
                                            Why don’t you choose a career in which you have an interest in and make your life easier?
                                        </div>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    <div className='book'>
                        <div className='bookcont'>
                            <h1>Begin your Journey towards Dream With us</h1>
                            <div className='bookbtn'>
                                <Button>Book a basic Counselling session</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mail'>
                <div className='max-width'>
                    <div className='mhead'>Feel free to contact us</div>
                    <Container>
                        <Row>
                            <Col>
                                <div className='maCard'>
                                    <div className='maH'>
                                        <div className='maCircle'>
                                            <img src='Call.png' alt='' />
                                        </div>
                                        <h1>Call us</h1>
                                    </div>
                                    <h2>+91 9311898085</h2>
                                </div>
                            </Col>

                            <Col>
                                <div className='maCard'>
                                    <div className='maH'>
                                        <div className='maCircle'>
                                            <img src='Mail.png' alt='' />
                                        </div>
                                        <h1>Mail us</h1>
                                    </div>
                                    <h2>udelineindia@gmail.com</h2>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Mentors