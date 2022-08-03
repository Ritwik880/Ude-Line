import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const form = {
        border: '1px solid blue',
        borderRadius: '4px'

    };

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
                                                                <span className="material-symbols-rounded">
                                                                    done
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='cont'>
                                                            Live session
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
                                        <NavLink to='/bookForm'>
                                            <Button>Book a basic Counselling session for (Free Trial )</Button>
                                        </NavLink>
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
                        <NavLink to='/bookForm'>
                            <Button>Let’s Try Basic counselling Session</Button>
                        </NavLink>
                    </div>
                    <div className='cImg'>
                        <img src='connectimg.png' alt='' />
                    </div>
                </div>
            </div>

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
                        <NavLink to='/form'>
                            <Button className='btn1'>Get started</Button>
                        </NavLink>
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
                        <NavLink to='/mentors'>
                            <Button className='btn3'>View all</Button>
                        </NavLink>
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
                                <NavLink to='/bookForm'>
                                    <Button>Book a basic Counselling session</Button>
                                </NavLink>
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

export default Home