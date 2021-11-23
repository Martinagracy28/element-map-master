import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Icon1 from '../../assets/images/transaction.png'
import Icon2 from '../../assets/images/throughput.png'
import Icon3 from '../../assets/images/finality.png'
import Icon4 from '../../assets/images/security.png'
// import Icon5 from '../../assets/images/interoperable.png'
import Logo from '../../assets/images/logo.png';

const Banner = () => {
    return (
        <div className="py-100 bg-black">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={9}>
                        <h1 className="text-center">
                            <span><img src={Logo} width="100" className="mb-2" alt="logo" /></span> <br />
                            <small>Powered by <span>ELEMENT &trade;</span></small>
                        </h1>
                        <p>
                            When it comes to raising funds, a team’s specific needs should be front and center--not an afterthought. There’s no step more important in a project’s journey. It’s oftentimes the first interaction with their future community and can set the tone, for better or worse, of what’s to come.
                        </p>

                        <p><strong>ELEMENT &trade; is proud to bring only the best and brightest projects to the ELEMENT ecosystem. Through their groundbreaking consensus protocols and architecture, our Platform is able to offer:</strong></p>                        
                    </Col>

                    <Col lg={12}>
                        <Row className="mt-5 pt-3">
                            <Col md={3} sm={6} className="mb-md-5 mb-4 pb-md-3 pb-md-2">
                                <div className="team-item d-flex align-items-center">
                                    <div className="team-item-icon m-0">
                                        <img src={Icon1} alt="icon" />
                                    </div>
                                    <p className="pb-0 ps-4">Cheap transactions</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="mb-md-5 mb-4 pb-md-3 pb-md-2">
                                <div className="team-item d-flex align-items-center">
                                    <div className="team-item-icon m-0">
                                        <img src={Icon2} alt="icon" />
                                    </div>
                                    <p className="pb-0 ps-4">High throughput</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="mb-md-5 mb-4 pb-md-3 pb-md-2">
                                <div className="team-item d-flex align-items-center">
                                    <div className="team-item-icon m-0">
                                        <img src={Icon3} alt="icon" />
                                    </div>
                                    <p className="pb-0 ps-4">Near-instant finality</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="mb-md-5 mb-4 pb-md-3 pb-md-2">
                                <div className="team-item d-flex align-items-center">
                                    <div className="team-item-icon m-0">
                                        <img src={Icon4} alt="icon" />
                                    </div>
                                    <p className="pb-0 ps-4">Unparalleled security</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;