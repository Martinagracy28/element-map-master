import React from 'react';
import Layout from './Layout';
import {Container, Form, InputGroup, FormControl, Button} from 'react-bootstrap';

// Assets
import EmailIcon from '../assets/images/email-icon.png';
import PasswordIcon from '../assets/images/password-icon.png';

function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <main className="dashboard-view ms-lg-5">
                <Container>
                    <div className="login-area">

                        <div className="login-box">
                            <h2 className="text-center grad-line">Welcome to the <br /><span><big>Future of Fundraising</big></span></h2>

                            <div className="pt-5">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text id="basic-addon1"><img src={EmailIcon} alt="icon" /></InputGroup.Text>
                                            <FormControl
                                            placeholder="satoshi@gmail.com"
                                            aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text id="basic-addon1"><img src={PasswordIcon} alt="icon" /></InputGroup.Text>
                                            <FormControl
                                            placeholder="*******"
                                            aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Button type="submit" size="lg" disabled className="w-100 btn-cta">Login</Button>
                                </Form>

                                <div className="pt-4">
                                    <p className="text-center mb-2"><a href="/" className="text-blue">Forgot password?</a></p>
                                    <p className="text-center">Are you new here? <a href="/" className="text-blue">Create an account</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="mb-3">Or you can continue with one of the following services</p>
                            <a href="/" className="btn btn-facebook m-1">Login with Facebook</a>
                            <a href="/" className="btn btn-twitter m-1">Login with Twitter</a>
                        </div>
                    </div>
                </Container>
            </main>
        </Layout>
    );
}

export default HomePage;