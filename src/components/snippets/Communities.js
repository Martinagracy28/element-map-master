import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="py-100">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={9}>
                        <h1>
                            For <span>Communities</span> <br />
                            <small>All Fair no Fumble</small>
                        </h1>
                        <p>Without network participants, there is no network. Community is the lifeblood of any project and its strength begins with an equal opportunity to contribute, no matter who you are. ELEMENT’s focus on broad participation and fair distribution means that community members can focus on what matters most: supporting the project.</p>
                    </Col>
                </Row>

                <Row className="mt-5 pt-md-3">
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            Stable and <br />dynamic pools
                        </div>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            Multiple <br />auction types
                        </div>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            Platform vesting and <br />distribution
                        </div>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            Accept multiple currencies <br />including stablecoins
                        </div>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            Custom sale <br />parameters
                        </div>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <div className="invester-item">
                            ELEMENT blockchain <br />token distribution
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;