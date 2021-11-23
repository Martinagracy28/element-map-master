import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Button, Modal, InputGroup, FormControl, Stack, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Chart from "react-google-charts";

// components
import SignUp from './snippets/SignUp';
import CopyClipboard from './snippets/CopyClipboard';

// assets
import TVLIcon from '../../assets/images/tvl-icon.svg';
import XavaIcon from '../../assets/images/xava-price-icon.svg';
import CoinsIcon from '../../assets/images/coins.png';
import WithdrawIcon from '../../assets/images/withdraw.png';

function Allocation() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Layout>
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeVariant="white" closeButton>
                    <Modal.Title>Allocation Staking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>IDO Allocation Staking on Avalaunch is similar to traditional farming, with the added benefit of earning both IDO allocation and platform fees, on top of ecosystem rewards.</p>
                    <p>When staking ELEM, your tokens will be rewarded in four ways:</p>

                    <ul className="list-text">
                        <li>Allocation in IDOs (optional)</li>
                        <li>Ecosystem rewards</li>
                        <li>Deposit Fees</li>
                        <li>Allocation Fees</li>
                    </ul>

                    <p><strong>You can think of this like single-sided staking (no impermanent loss), launchpad allocations and network fees, all rolled into one. Even if you can’t participate in sales, there is still plenty of reason to hold and stake ELEM.</strong></p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center pb-4">
                    <Button variant="secondary" size="lg" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container fluid>
                <div className="py-100 text-center">
                    <Row className="justify-content-center">
                        <Col lg={8} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">ELEMENT IDO <br /><span className="d-inline-block"><big>Allocation Staking</big></span></h1>
                            <p className="lead pt-2 mb-5">There is a 2% deposit fee taken on all new ELEM deposits. This fee is redistributed to the current ELEM stakers, rewards long-term participants and combats dilution.</p>

                            <Button variant="cta" className="btn-cta-dark" size="lg" onClick={handleShow}>
                                Info
                            </Button>
                        </Col>
                    </Row>
                </div>

                <div className="py-4 pt-0">
                    <div className="staking-tvl-wrapper text-center d-flex align-items-center">
                        <div className="staking-tvl-item">
                            <p className="mb-1 d-flex"><img src={TVLIcon} alt="TVL Icon" /> Total Value Locked</p>
                            <CopyClipboard value="83,876,501.74646658" preview="$81.6M" />
                        </div>
                        <div className="staking-divider"></div>
                        <div className="staking-tvl-item">
                            <p className="mb-1 d-flex"><img src={XavaIcon} alt="ELEM Icon" /> ELEM Price</p>
                            <CopyClipboard value="7.72" preview="$7.72" />
                        </div>
                    </div>
                </div>

                <Row>
                    <Col md={6} className="mb-2">
                        <h2 className="d-flex align-items-center"><img src={CoinsIcon} className="title-icon" alt="Coins Icon" /> <span className="me-2">Stake</span> ELEM</h2>

                        <div className="stak-card mb-5">
                            <p className="mb-2 d-flex justify-content-between">
                                <span>Balance: <strong>0</strong></span>
                                <span className="text-blue">MAX</span>
                            </p>
                            <InputGroup className="mb-2 p-2">
                                <FormControl
                                placeholder="0"
                                disabled
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text className="text-blue" id="basic-addon2">ELEM</InputGroup.Text>
                            </InputGroup>
                            <p className="mb-2">
                                <span className="text-danger">Required</span>
                            </p>
                            <Button variant="cta" disabled size="lg" className="w-100 rounded-10">
                                Connect wallet to stake
                            </Button>
                        </div>

                        <h2 className="d-flex align-items-center"><img src={WithdrawIcon} className="title-icon" alt="Coins Icon" /> <span className="me-2">Withdraw</span> ELEM</h2>

                        <div className="stak-card mb-3">
                            <p className="mb-2 d-flex justify-content-between">
                                <span>Balance: <strong>0</strong></span>
                                <span className="text-blue">MAX</span>
                            </p>
                            <InputGroup className="mb-3 p-2">
                                <FormControl
                                placeholder="0"
                                disabled
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text className="text-blue" id="basic-addon2">ELEM</InputGroup.Text>
                            </InputGroup>
                            
                            <Stack direction="horizontal" gap={2}>
                                <Button variant="cta" disabled size="lg" className="w-100 px-2 rounded-10">
                                    Connect wallet to withdraw
                                </Button>
                                <Button variant="cta" disabled size="lg" className="w-100 px-2 rounded-10">
                                    Connect wallet to harvest
                                </Button>
                            </Stack>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2">
                        <h2 className="d-flex align-items-center"><img src={CoinsIcon} className="title-icon" alt="Coins Icon" /> <span className="me-2">Staking</span> Stats</h2>

                        <div className="stak-card py-4 justify-content-between d-flex flex-wrap align-items-center mb-3">
                            <p className="mb-0 d-flex align-items-center" style={{opacity: '1'}}>
                                Current APY 
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            The current yield for staked ELEM. This includes rewards and redistributed platform fees.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <CopyClipboard value="5.46385" preview="5.46 %" />
                        </div>

                        <div className="stak-card py-4 justify-content-between d-flex flex-wrap align-items-center mb-3">
                            <p className="mb-0 py-2 d-flex align-items-center" style={{opacity: '1'}}>
                                My Staked ELEM 
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            The number of ELEM tokens you currently have staked.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <div className="d-flex flex-column align-items-end">
                                <CopyClipboard value="0" preview="0 ELEM" />
                                <p><small>~$0</small></p>
                            </div>
                        </div>

                        <div className="stak-card py-4 justify-content-between d-flex flex-wrap align-items-center mb-3">
                            <p className="mb-0 py-2 d-flex align-items-center" style={{opacity: '1'}}>
                                My Earned ELEM
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            The number of ELEM tokens you currently have staked.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <div className="d-flex flex-column align-items-end">
                                <CopyClipboard value="0" preview="0 ELEM" />
                                <p><small>~$0</small></p>
                            </div>
                        </div>

                        <div className="stak-card py-4 justify-content-between d-flex flex-wrap align-items-center mb-3">
                            <p className="mb-0 py-2 d-flex align-items-center" style={{opacity: '1'}}>
                                Compound ELEM
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            This will automatically deposit earned ELEM into your allocation stake. Please note, the 2% deposit fee will be taken from this amount.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <Button variant="cta" disabled size="lg" className="rounded-10">
                                Connect wallet to compound
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="mb-3">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center" style={{opacity: '1'}}>
                                Total ELEM Staked
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Total ELEM staking for allocation.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <CopyClipboard value="10,447,688.56705349" preview="10,447,688.57" />
                            <p><small><CopyClipboard value="82,954,647.22240473" preview="~$82,954,647.22" /></small></p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center" style={{opacity: '1'}}>
                                Total Rewards Redistributed
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Total ELEM staking for allocation.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <CopyClipboard value="373,746.03155829" preview="373,746.03" />
                            <p><small><CopyClipboard value="2,967,543.49057284" preview="~$2,967,543.49" /></small></p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center" style={{opacity: '1'}}>
                                Reward Unlock Rate
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Total ELEM staking for allocation.
                                        </Tooltip>
                                    }
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" width="16" height="16" fill="none" viewBox="0 0 16 16"><g clipPath="url(#clip-info-icon)"><path fill="#00d2ff" d="M7 11.98h1.5v-4.5H7v4.5zM7.75.73a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 13.5a6 6 0 116-6 6.008 6.008 0 01-6 6zM7 5.98h1.5v-1.5H7v1.5z"></path></g><defs><clipPath id="clip-info-icon"><path fill="#fff" d="M0 0H15V15H0z" transform="translate(.25 .73)"></path></clipPath></defs></svg>
                                </OverlayTrigger>
                            </p>

                            <div className="d-flex align-items-end">
                                <CopyClipboard value="0.00625" preview="0.01 ELEM" />
                                <h6 className="ms-2 mb-0 line-height-1">/ Second</h6>
                            </div>
                            <p><small><CopyClipboard value="0.049625" preview="~$0.05" /></small></p>
                        </div>
                    </Col>
                </Row>

                <div className="py-50">
                    <h2 className="text-center">ELEM <span>Tokens Staked</span> Over Time</h2>

                    <div className="stak-card">
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="AreaChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                        ['Year', 'ELEM Tokens Staked Over Time:'],
                        ['11/02 01:36', 8800000],
                        ['11/02 02:36', 9000000],
                        ['11/02 03:36', 9200000],
                        ['11/02 04:36', 9400000],
                        ['11/02 05:36', 9600000],
                        ['11/02 06:36', 9800000],
                        ['11/02 07:36', 10000000],
                        ['11/02 08:36', 10200000],
                        ['11/02 09:36', 10400000],
                        ['11/02 10:36', 10500000],
                        ['11/02 11:36', 10600000],
                        ['11/02 12:36', 10700000],
                        ]}
                        options={{
                        legend: 'none',
                        pointSize: 5,
                        backgroundColor: '#fff',
                        colors: ['#219bb5'],
                        title: '',
                        hAxis: { 
                            titleTextStyle: { color: '#334' }, 
                            textStyle: {color: "#334334"},
                            gridlines: {
                                color: "#334334"
                            },
                            baselineColor: '#334334'
                        },
                        vAxis: { 
                            titleTextStyle: { color: '#334' }, 
                            textStyle: {color: "#334334"},
                            gridlines: {
                                color: "#334334"
                            },
                            baselineColor: '#334334'
                        },
                        // For the legend to fit, we make the chart area smaller
                        chartArea: { width: '85%', height: '80%' },
                        // lineWidth: 25
                        }}
                    />
                    </div>
                </div>
                
                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Allocation;