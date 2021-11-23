import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../assets/images/logo.png';
import Twitter from '../assets/images/twitter.svg'
import Medium from '../assets/images/m-icon.svg'
import Telegram from '../assets/images/telegram-icon.svg'

function Footer() {
    return (
        <div className="footer py-5">
            <Container>
                <Row>
                    <Col md={3} className="text-md-start mb-md-0 mb-4 mb-xs-4 py-2 text-center">
                        <a href="/" className="footer-logo"><img src={Logo} alt="logo" /> ELEMENT</a>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={3} xs={6} className="mb-md-0 mb-4">
                                <h6>SOCIAL</h6>

                                <ul className="list-unstyled">
                                    <li><a href="/">Medium</a></li>
                                    <li><a href="/">Telegram Community</a></li>
                                    <li><a href="/">Telegram Announcements</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Brand Kit</a></li>
                                </ul>
                            </Col>
                            <Col md={3} xs={6} className="mb-md-0 mb-4">
                                <h6>TOKEN</h6>

                                <ul className="list-unstyled">
                                    <li><a href="/">CoinGecko</a></li>
                                    <li><a href="/">CoinMarketCap</a></li>
                                    <li><a href="/">KuCoin</a></li>
                                    <li><a href="/">Gate.io</a></li>
                                </ul>
                            </Col>
                            <Col md={3} xs={6} className="mb-md-0 mb-4">
                                <h6>HELP</h6>

                                <ul className="list-unstyled">
                                    <li><a href="/">Terms of Service</a></li>
                                </ul>
                            </Col>
                            <Col md={3} xs={6} className="mb-md-0 mb-4">
                                <h6>SMART CONTRACTS</h6>

                                <ul className="list-unstyled">
                                    <li><a href="/">Github</a></li>
                                    <li><a href="/">Smart Contracts Audit</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={12} className="text-end pt-4">
                        <p>© ELEMENT - 2021 COPYRIGHT</p>
                    </Col>
                </Row>
                <Row className="align-items-center d-none">
                    <Col md={4} className="text-md-start py-2 text-center">
                        <a href="/" className="footer-logo"><img src={Logo} alt="logo" /> ELEMENT</a>
                    </Col>
                    <Col md={4} className="text-center py-md-2 py-5">
                        <div className="footer-social">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AvalaunchApp">
                                <img src={Twitter} alt="Twitter" />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/avalaunch">
                                <img src={Medium} alt="Medium" />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/avalaunch_app">
                                <img src={Telegram} alt="Telegram" />
                            </a>
                        </div>
                    </Col>
                    <Col md={4} className="text-center py-2">
                        <p>© ELEMENT - 2021 COPYRIGHT</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;