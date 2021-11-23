import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="py-100 bg-dark">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={6}>
                        <h1>
                            For <span>Investors</span> <br />
                            <small>Participate with <br />
                            Confidence</small>
                        </h1>
                        <p>
                            ELEMENT is designed to remove the pain points of the current fundraising landscape. Conceived with an investor-forward framework, the protocol’s goal is to remove the confusion, cost, and volatility of other platforms. We want to inform and empower investors to participate in sales with confidence.
                        </p>
                        
                        <h2 className="bottom-title">Designed by investors, <br />for investors.
                            <svg xmlns="http://www.w3.org/2000/svg" width="291" height="165" fill="none" viewBox="0 0 291 165"><g filter="url(#filter0_d)"><path stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" d="M78 87c36.833-3 115.3-9 134.5-9"></path></g><defs><filter id="filter0_d" width="290.5" height="165" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="37"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.641667 0 0 0 0 0.641667 0 0 0 0 0.641667 0 0 0 0.6 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="paint0_linear" x1="78" x2="213" y1="82" y2="87" gradientUnits="userSpaceOnUse"><stop stopColor="#3a7bd5"></stop><stop offset="1" stopColor="#3a7bd5"></stop></linearGradient></defs></svg>
                        </h2>
                    </Col>
                    <Col lg={4} className="py-3">
                        <ul className="invester-list list-unstyled">
                            <li>
                                <div className="invester-item">
                                    Stable <br />price
                                </div>
                            </li>
                            <li>
                                <div className="invester-item">
                                    Predictable <br />outcomes
                                </div>
                            </li>
                            <li>
                                <div className="invester-item">
                                    More informed <br />investors
                                </div>
                            </li>
                            <li>
                                <div className="invester-item">
                                   Secure and <br />compliant
                                </div>
                            </li>
                            <li>
                                <div className="invester-item">
                                    Fair distribution of <br />tokens
                                </div>
                            </li>
                            <li>
                                <div className="invester-item">
                                    Intuitive user <br />experience
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;