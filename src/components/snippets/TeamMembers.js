import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Team from '../../assets/images/mark.jpeg'
import TeamCircle from '../../assets/images/team-circle.png'

const Banner = () => {
    return (
        <div className="bg-dark">
            <div className="py-100">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col sm={5} lg={6} className="mb-md-0 mb-4">
                            <h1>
                                Our <span>Team</span>
                            </h1>
                            <p>Our team's primary mission is to bring only the highest quality projects onto ELEMENT and create inroads for new users to experience its truly novel technology and potential.</p>
                        </Col>
                        <Col sm={6} lg={5}>
                            <img src={TeamCircle} className="img-fluid d-block mx-auto" alt="team circle" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-100">
                <Container>
                    <Row className="mt-5 d-none mb-5 pb-2 pt-lg-3">
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Mark Stanwyck 
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Director</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Kal Ali
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Director</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Yanush Ali
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Director</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Dave Donnenfeld
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Director</p>
                            </div>
                        </Col>
                    </Row>
                    

                    <Row className="justify-content-between">
                        <Col lg={6}>
                            <h1>
                                Advisors
                            </h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Nikola Madjarevic
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Project Lead at Hord.app</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Nicolas Lemaitre
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>General Manager at Ava Labs</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Lydia Chiu
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Vice President Of Business Development at Ava Labs</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    John Nahas
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Senior Director of Business Development at Ava Labs</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Farid Rached
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Ecosystem Growth Manager at Ava Labs</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Colin Cusce
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Advisor at ELEMENT</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="mb-4 pb-2">
                            <div className="team-member">
                                <img src={Team} className="img-fluid" alt="member" />
                                <h4>
                                    Roger Lu
                                    <a className="linked-in-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-stanwyck-07a04bb/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#3178F2" d="M20.36 0H1.64A1.63 1.63 0 00.498.46 1.639 1.639 0 000 1.59v18.82c.01.428.187.835.495 1.133.307.298.719.462 1.146.457h18.718c.427.005.84-.16 1.146-.457A1.63 1.63 0 0022 20.409V1.59a1.639 1.639 0 00-.497-1.13A1.63 1.63 0 0020.359 0zM6.517 18.764H3.29V8.274h3.227v10.49zM4.94 6.812c-.496 0-.971-.194-1.326-.54a1.906 1.906 0 01-.572-1.317A1.844 1.844 0 014.204 3.18c.234-.093.485-.136.737-.127.48.034.928.248 1.256.6A1.906 1.906 0 014.94 6.85v-.037zM18.773 18.7h-3.19v-5.13c0-1.222 0-2.813-1.705-2.813s-1.961 1.343-1.961 2.694v5.194H8.653V8.274h3.044v1.38h.064a3.415 3.415 0 013.107-1.71c3.291 0 3.905 2.206 3.905 5.01v5.745z"></path></svg></a>
                                </h4>
                                <p>Managing Partner at Hazelbrook Capital</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;