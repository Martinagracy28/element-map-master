import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../../assets/images/logo.png'

const Banner = () => {
    return (
        <div className="about-area py-100">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={6}>
                        <p>
                            The fundraising space is broken. <br />We’ve come a long way, but we can do better.
                        </p>
                        <p>Today’s decentralized platforms are slow, confusing, expensive, and isolate both new and experienced investors. Participation is restricted to a select few and technical issues seem to be the norm, rather than the exception.</p>
                        <p>Blockchain innovations are accelerating faster every day, it’s time for fundraising to catch up.</p>

                        <h2 className="bottom-title">The ELEMENT Protocol. <br />People First.
                            <svg xmlns="http://www.w3.org/2000/svg" width="291" height="165" fill="none" viewBox="0 0 291 165"><g filter="url(#filter0_d)"><path stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" d="M78 87c36.833-3 115.3-9 134.5-9"></path></g><defs><filter id="filter0_d" width="290.5" height="165" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="37"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.641667 0 0 0 0 0.641667 0 0 0 0 0.641667 0 0 0 0.6 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="paint0_linear" x1="78" x2="213" y1="82" y2="87" gradientUnits="userSpaceOnUse"><stop stopColor="#3a7bd5"></stop><stop offset="1" stopColor="#3a7bd5"></stop></linearGradient></defs></svg>
                        </h2>
                    </Col>
                    <Col lg={5} className="py-3">
                        <img src={Logo} className="img-fluid mx-auto d-block" alt="Logo" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;