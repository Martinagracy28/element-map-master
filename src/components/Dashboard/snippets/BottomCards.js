import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class BottomCards extends Component {
    render() {
        return (
            <Row>
                <Col md={4} className="mb-md-0 mb-4">
                    <div className="bt-card h-100">
                        <div className="d-flex align-items-center mb-3 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            <h3 className="mb-0">Fair and Equitable Fundraising</h3>
                        </div>
                        <p>Our unique staking and distribution methodology ensures broad participation.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-md-0 mb-4">
                    <div className="bt-card h-100">
                        <div className="d-flex align-items-center mb-3 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            <h3 className="mb-0">Community <br />Focused</h3>
                        </div>
                        <p>Our emphasis on people and teams creates strong starts for new projects.</p>
                    </div>
                </Col>
                <Col md={4} className="mb-md-0 mb-4">
                    <div className="bt-card h-100">
                        <div className="d-flex align-items-center mb-3 pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                            <h3 className="mb-0">Innovative <br />Platform</h3>
                        </div>
                        <p>The first launchpad to allow holders to grow with the network, regardless of participation.</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default BottomCards;