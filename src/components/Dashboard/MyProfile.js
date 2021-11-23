import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Button, Alert, Form, InputGroup, FormControl, Tabs, Tab} from 'react-bootstrap';


import CopyClipboard from './snippets/CopyClipboard';

// Assets
import EmailIcon from '../../assets/images/email-icon.png';
import userIcon from '../../assets/images/user-icon.png';
import KycVerification from '../../assets/images/kyc-verification.png';
import ConnectWallet from '../../assets/images/connect-wallet.png';
import CopyIcon from '../../assets/images/copy-icon.png';
import SignatureIcon from '../../assets/images/signature-icon.png';
import Icon1 from '../../assets/images/step-done.png';
import Icon3 from '../../assets/images/step-3.png';
import Icon4 from '../../assets/images/step-4.png';

function Sales() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Container fluid>
                <div className="py-100 text-center">
                    <Row className="justify-content-center">
                        <Col lg={6} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">ELEMENT <br /><span className="d-inline-block"><big>User Profile</big></span></h1>
                        </Col>
                    </Row>
                </div>

                <div className="py-50 pt-0">
                    <Row className="justify-content-center">
                        <Col lg={10} className="mb-4">
                            <div className="user-process d-flex align-items-start">
                                <div>
                                    <img src={Icon1} alt="icon" />
                                    <strong>Registration</strong>
                                </div>
                                <div>
                                    <img src={Icon3} alt="icon" />
                                    <strong>KYC Authentication</strong>
                                </div>
                                <div>
                                    <img src={Icon4} alt="icon" />
                                    <strong>Verify C-Chain Wallet Ownership</strong>
                                </div>
                                <div>
                                    <img src={Icon4} alt="icon" />
                                    <strong>Register as Validator</strong>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="py-50 pt-0">
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Tabs defaultActiveKey="my_profile" id="tab-airdrod">
                                <Tab eventKey="my_profile" title="My Profile">
                                    <Form className="pb-2">
                                        <Form.Group className="mb-3 form-group form-group-disabled" controlId="formBasicEmail">
                                            <Form.Label>Your Name</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="basic-addon1"><img src={userIcon} alt="icon" /></InputGroup.Text>
                                                <FormControl
                                                    placeholder="satoshi satoshi"
                                                    value="satoshi satoshi"
                                                    className="ps-2"
                                                    aria-describedby="basic-addon1"
                                                    />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group form-group-disabled" controlId="formBasicEmail">
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
                                    </Form>
                                </Tab>
                                <Tab eventKey="kyc_Status" title="KYC Status">
                                    <div className="d-flex flex-column pb-4 text-center align-items-center">
                                        <img src={KycVerification} alt="icon" width="160" className="my-3" />

                                        <h5>Individual KYC Verification</h5>
                                        <p className="px-md-5">Each account has 1 KYC credit. If your verification fails, please contact an admin for more information before submitting again.</p>

                                        <Button variant="cta" disabled size="lg" className="rounded-10">
                                            Connect Wallet
                                        </Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="verify_wallet" title="Verify Wallet">
                                    <div className="d-flex flex-column pb-4 text-center align-items-center">
                                        <img src={ConnectWallet} alt="icon" width="160" className="my-3" />

                                        <h5>Verify your wallet</h5>

                                        <Button variant="cta" size="lg" className="rounded-10">
                                            Verify Wallet
                                        </Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="register_as_validator" title="Register as Validator">
                                    <Alert variant="danger">
                                        <strong>Note:</strong> Sign a message with your X-Chain address, on Avalanche Web Wallet, to prove ownership of address.
                                    </Alert>
                                    <Form className="pb-2">
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Message to sign with X-Chain wallet</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="basic-addon1"><img src={CopyIcon} alt="icon" /></InputGroup.Text>
                                                <CopyClipboard value="I will copy this text, and sign it with my X-Chain wallet" preview="I will copy this text, and sign it with my X-Chain wallet" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Signature</Form.Label>
                                            <InputGroup className="align-items-start">
                                                <InputGroup.Text id="basic-addon1"><img src={SignatureIcon} alt="icon" /></InputGroup.Text>
                                                <FormControl
                                                    as="textarea"
                                                    rows="5"
                                                    placeholder="*******"
                                                    className="ps-2"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                        <Button type="submit" size="lg" disabled className="btn-cta">Verify</Button>
                                    </Form>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </div>

            </Container>
        </Layout>
    );
}

export default Sales;