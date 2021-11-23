import React from 'react';
import {Button, Modal, Form, InputGroup, FormControl} from 'react-bootstrap';


import EmailIcon from '../../../assets/images/email-icon.png';
import userIcon from '../../../assets/images/user-icon.png';
import EmailSubscription from '../../../assets/images/email-subscription.svg';

function SignUp() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Body>
                    <div className="py-4 px-3">
                        <img src={EmailSubscription} className="offset-icon" alt="EmailSubscription" />
                        <h5 className="mb-4 text-center">Subscribe for the latest news</h5>

                        <Form>
                            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"><img src={userIcon} alt="icon" /></InputGroup.Text>
                                    <FormControl
                                        placeholder="John Doe"
                                        value="John Doe"
                                        className="ps-2"
                                        aria-describedby="basic-addon1"
                                        />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"><img src={EmailIcon} alt="icon" /></InputGroup.Text>
                                    <FormControl
                                        placeholder="satoshi@gmail.com"
                                        value="satoshi@gmail.com"
                                        className="ps-2"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Button type="submit" size="lg" disabled className="w-100 btn-cta-dark btn-cta">Subscribe</Button>
                        </Form>
                    </div>

                </Modal.Body>
            </Modal>
            <div className="text-center d-flex flex-column align-items-center">
                <h2 className="grad-line mb-5">The ELEMENT Protocol. <span>People First.</span></h2>

                <h3>Get Alerts For New Pools</h3>
                <Button variant="cta" className="btn-cta-dark" onClick={handleShow}>
                Sign up <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg>
                </Button>
            </div>
        </>
    );
}

export default SignUp;