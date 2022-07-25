import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                phone: phone,
                message: message,
            })
            .then(() => {
                setLoader(false);
                toast.success("Thank you for contacting us.");
                //   alert("Your message has been submitted👍");
            })
            .catch((error) => {
                toast.error("Please provide value in each input field");
                //   alert(toast.error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };
    const heading = {

        color: "black",
        textAlign: "center",
        paddingTop: "300px"
    }
    const form = {
        border: '1px solid blue',
        borderRadius: '4px'

    };
    const image = {
        height: "40%",
        marginTop: "20%"

    }
    return (
        <>
            <div className='contact'>
                <ToastContainer position="top-center" />
                <div className='max-width'>
                    <Container>
                        <Row className='row1'>
                            <Col className='col1'>
                                <img src='contactimg.png' alt='' />
                            </Col>
                            <Col >
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="text" placeholder="Email*" required autoComplete="offf" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="text" placeholder="Phone Number*" required autoComplete="offf" value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group style={form} className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control as="textarea" rows={3} placeholder="Message*" required value={message}
                                            onChange={(e) => setMessage(e.target.value)} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
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