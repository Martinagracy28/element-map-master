import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="py-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <h1>
                            For <span>Teams</span> <br />
                            <small>Raise Right, Start Right</small>
                        </h1>
                        <p>
                            When it comes to raising funds, a team’s specific needs should be front and center--not an afterthought. There’s no step more important in a project’s journey. It’s oftentimes the first interaction with their future community and can set the tone, for better or worse, of what’s to come.
                        </p>

                        <p><strong>The ELEMENT platform is dedicated to making sure teams receive what they need while establishing strong, positive momentum.</strong></p>                        
                    </Col>

                    <Col lg={12}>
                        <Row className="mt-5 pt-3">
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" fill="none" viewBox="0 0 38 37"><path stroke="#219bb5" strokeWidth="2" d="M1 .862v10m36-10v10m0 0v19a6 6 0 01-6 6H7a6 6 0 01-6-6v-19m36 0l-5.293 1.176a10 10 0 01-7.026-1.02l-.825-.458a10 10 0 00-9.712 0l-.825.458a10 10 0 01-7.026 1.02L1 10.862"></path></svg>
                                    </div>
                                    <p>Stable and <br />dynamic pools</p>
                                </div>
                            </Col>
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="none" viewBox="0 0 37 37"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 1H1v14h14V1zM36 1H22v14h14V1zM15 22H1v14h14V22zM36 22H22v14h14V22z"></path></svg>
                                    </div>
                                    <p>Multiple <br />auction types</p>
                                </div>
                            </Col>
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" fill="none" viewBox="0 0 37 35"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M30.896 33.083a5.104 5.104 0 100-10.208 5.104 5.104 0 000 10.208zM30.897 22.875v-7.313a8.75 8.75 0 00-2.563-6.187l-6.917-6.917"></path><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.417 9.75V2.458h7.292M6.104 11.208A5.104 5.104 0 106.104 1a5.104 5.104 0 000 10.208zM6.104 11.208v7.314a8.75 8.75 0 002.564 6.187l6.916 6.916"></path><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.584 24.333v7.292H8.292"></path></svg>
                                    </div>
                                    <p>Platform vesting and <br />distribution</p>
                                </div>
                            </Col>
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" fill="none" viewBox="0 0 37 35"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 15a7 7 0 100-14 7 7 0 000 14zM29 33.2a7 7 0 100-14 7 7 0 000 14zM8 33.2a7 7 0 100-14 7 7 0 000 14z"></path></svg>
                                    </div>
                                    <p>Accept multiple currencies <br />including stablecoins</p>
                                </div>
                            </Col>
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" fill="none" viewBox="0 0 40 38"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.688 14.813V36.75M19.688 1v5.688M19.688 14.813a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125zM34.313 31.063v5.687M34.313 1v21.938M34.313 31.063a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125zM5.063 24.563V36.75M5.063 1v15.438M5.063 24.563a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125z"></path></svg>
                                    </div>
                                    <p>Custom sale <br />parameters</p>
                                </div>
                            </Col>
                            <Col md={4} xs={6} className="mb-4 pb-2">
                                <div className="team-item">
                                    <div className="team-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" fill="none" viewBox="0 0 32 37"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.385 23.885a5.385 5.385 0 100-10.77 5.385 5.385 0 000 10.77zM25.23 36a5.385 5.385 0 100-10.77 5.385 5.385 0 000 10.77zM25.23 11.77a5.385 5.385 0 100-10.77 5.385 5.385 0 000 10.77zM20.701 9.296l-9.788 6.293M10.913 21.411l9.788 6.293"></path></svg>
                                    </div>
                                    <p>ELEMENT blockchain <br />token distribution</p>
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