import React from 'react';
import Layout from './Layout';
import {Container, Row, Col} from 'react-bootstrap';

// components
import HowToParticipate from './snippets/HowToParticipate';
import UpcomingSales from './snippets/LaunchpadUpcomingSales';
import OnGoingSales from './snippets/LaunchpadOnGoingSales';
import CompletedSales from './snippets/LaunchpadCompletedSales';
import BottomCards from './snippets/BottomCards';
import SignUp from './snippets/SignUp';

function Launchpad() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Container fluid>
                <div className="py-100 d-none text-center">
                    <Row className="justify-content-center">
                        <Col lg={6} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">Welcome to the <br /><span className="d-inline-block"><big>Future of Fundraising</big></span></h1>
                            <p className="lead pt-2">The first protocol, exclusively for the ELEMENT ecosystem, to offer promising and innovative projects a fast, secure, and efficient platform for decentralized fundraising.</p>
                        </Col>
                    </Row>
                </div>

                <div className="py-50">
                    <h2 className="section-title">How to <span>Participate</span></h2>

                    <HowToParticipate />
                </div>

                <div className="py-50 pt-0">
                    <h2 className="section-title"><span>Upcoming</span> Sales</h2>

                    <UpcomingSales />
                </div>

                <div className="py-50 pt-0">
                    <h2 className="section-title"><span>On Going</span> Sales</h2>

                    <OnGoingSales />
                </div>

                <div className="py-50 pt-0">
                    <h2 className="section-title"><span>Completed</span> Sales</h2>

                    <CompletedSales />
                </div>

                <div className="py-50 pt-0">
                    <BottomCards />
                </div>
                
                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Launchpad;