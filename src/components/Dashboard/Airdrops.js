import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Button, Tabs, Tab} from 'react-bootstrap';

// components
import SignUp from './snippets/SignUp';
import CopyClipboard from './snippets/CopyClipboard';

// assets
import Logo from '../../assets/images/crabada_icon.svg'; 
import Logo2 from '../../assets/images/oh_finance_logo.jpeg';

function Airdrops() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Container fluid>
                <div className="py-100 text-center">
                    <Row className="justify-content-center">
                        <Col lg={8} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">ELEMENT <br /><span className="d-inline-block"><big>Airdrops</big></span></h1>
                            <p className="lead pt-2">Connect Your Wallet to Check Eligibility</p>

                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col xl={6} className="mb-4">
                        <div className="tab-card">
                            <div className="tab-card-heading d-flex align-items-center">
                                <img src={Logo} alt="logo" />
                                <div>
                                    <h5 className="mb-0">Oh! Finance Airdrop</h5>
                                    <p><small>OH (~$0.27)</small></p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Tabs defaultActiveKey="vesting_1" id="tab-airdrod">
                                    <Tab eventKey="vesting_1" title="Vesting 1">
                                        <p className="mb-2"><small>Started on October 28th 2021, 10:00 PM UTC</small></p>
                                        <p>All Avalaunch users who claimed an allocation in the Oh! Finance sale are eligible for this airdrop. Your airdrop distribution is directly proportional to XAVA staked during the sale. This airdrop includes both our $100,000 gift and ~$25,000 of unsold tokens.</p>

                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Claimed
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="459,700.005" preview="459,700.005" />
                                                <p className="ms-2"><small>(~$122,755.99)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Remaining
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="58,631.995" preview="58,631.995" />
                                                <p className="ms-2"><small>(~$15,656.79)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Claimable OH for This Wallet
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="0" preview="0" />
                                                <p className="ms-2"><small>(~$0)</small></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="vesting_2" title="Vesting 2">
                                        <p className="mb-2"><small>Started on November 4th 2021, 04:00 PM UTC</small></p>
                                        <p>All Avalaunch users who claimed an allocation in the Oh! Finance sale are eligible for this airdrop. Your airdrop distribution is directly proportional to XAVA staked during the sale. This airdrop includes both our $100,000 gift and ~$25,000 of unsold tokens.</p>

                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Claimed
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="459,700.005" preview="459,700.005" />
                                                <p className="ms-2"><small>(~$122,755.99)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Remaining
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="58,631.995" preview="58,631.995" />
                                                <p className="ms-2"><small>(~$15,656.79)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Claimable OH for This Wallet
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="0" preview="0" />
                                                <p className="ms-2"><small>(~$0)</small></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="vesting_3" title="Vesting 3">
                                        <p className="mb-2"><small>Starts on November 11th 2021, 04:00 PM UTC</small></p>
                                        <p>All Avalaunch users who claimed an allocation in the Oh! Finance sale are eligible for this airdrop. Your airdrop distribution is directly proportional to XAVA staked during the sale. This airdrop includes both our $100,000 gift and ~$25,000 of unsold tokens.</p>

                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Claimed
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="459,700.005" preview="459,700.005" />
                                                <p className="ms-2"><small>(~$122,755.99)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total OH Remaining
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="58,631.995" preview="58,631.995" />
                                                <p className="ms-2"><small>(~$15,656.79)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Claimable OH for This Wallet
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="0" preview="0" />
                                                <p className="ms-2"><small>(~$0)</small></p>
                                            </div>
                                        </div>

                                        <p><strong>Selected airdrop vesting will start on November 11th 2021, 04:00 PM UTC</strong></p>
                                    </Tab>
                                </Tabs>
                            </div>

                            <Button variant="cta" disabled size="lg" className="rounded-10">
                                Connect Wallet
                            </Button>
                        </div>
                    </Col>

                    <Col xl={6} className="mb-4">
                        <div className="tab-card">
                            <div className="tab-card-heading d-flex align-items-center">
                                <img src={Logo2} alt="logo" />
                                <div>
                                    <h5 className="mb-0">RocoFinance Airdrop</h5>
                                    <p><small>ROCO (~$3.69)</small></p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Tabs defaultActiveKey="vesting_1" id="tab-airdrod">
                                    <Tab eventKey="vesting_1" title="Vesting 1">
                                        <p className="mb-2"><small>Started on October 20th 2021, 05:34 PM UTC</small></p>
                                        <p>All Avalaunch users who claimed an allocation in the RocoFinance sale are eligible for this airdrop. Your airdrop distribution is directly proportional to XAVA staked during the sale.</p>

                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total ROCO Claimed
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="118,557.61687479" preview="118,557.6169" />
                                                <p className="ms-2"><small>(~$437,477.61)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total ROCO Remaining
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="3,917.38312521" preview="3,917.3831" />
                                                <p className="ms-2"><small>(~$14,455.14)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Claimable ROCO for This Wallet
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="0" preview="0" />
                                                <p className="ms-2"><small>(~$0)</small></p>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>

                            <Button variant="cta" disabled size="lg" className="rounded-10">
                                Connect Wallet
                            </Button>
                        </div>
                    </Col>                    
                    <Col xl={6} className="mb-4">
                        <div className="tab-card">
                            <div className="tab-card-heading d-flex align-items-center">
                                <img src={Logo2} alt="logo" />
                                <div>
                                    <h5 className="mb-0">HurricaneSwap Airdrop</h5>
                                    <p><small>HCT (~$0.2)</small></p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Tabs defaultActiveKey="vesting_1" id="tab-airdrod">
                                    <Tab eventKey="vesting_1" title="Vesting 1">
                                        <p className="mb-2"><small>Started on October 10th 2021, 05:34 PM UTC</small></p>
                                        <p>All Avalaunch users who claimed an allocation in the HurricaneSwap sale are eligible for this airdrop. Your airdrop distribution is directly proportional to XAVA staked during the sale.</p>

                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total HCT Claimed
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="118,557.61687479" preview="118,557.6169" />
                                                <p className="ms-2"><small>(~$437,477.61)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Total HCT Remaining
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="3,917.38312521" preview="3,917.3831" />
                                                <p className="ms-2"><small>(~$14,455.14)</small></p>
                                            </div>
                                        </div>
                                        <div className="stak-card d-flex flex-column align-items-start px-4">
                                            <p className="mb-2 d-flex align-items-center">
                                                Claimable HCT for This Wallet
                                            </p>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <CopyClipboard value="0" preview="0" />
                                                <p className="ms-2"><small>(~$0)</small></p>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>

                            <Button variant="cta" disabled size="lg" className="rounded-10">
                                Connect Wallet
                            </Button>
                        </div>
                    </Col>                    
                </Row>

                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Airdrops;