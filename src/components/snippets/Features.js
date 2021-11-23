import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="py-100 bg-dark">
            <Container>
                <h1>Features</h1>
                <Row>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M26 21.938v21.937M26 8.125v5.688M26 21.938a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.124zM40.625 38.188v5.687M40.625 8.125v21.938M40.625 38.188a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125zM11.375 31.688v12.187M11.375 8.125v15.438M11.375 31.688a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125z"></path></svg>

                            <p>Interoperable Swap <br />Pools</p>
                        </div>
                    </Col>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M17.875 13h26M17.877 26h25.998M17.877 39h25.998M8.938 15.438a2.437 2.437 0 100-4.875 2.437 2.437 0 000 4.874zM8.938 28.438a2.437 2.437 0 100-4.875 2.437 2.437 0 000 4.875zM8.938 41.438a2.437 2.437 0 100-4.875 2.437 2.437 0 000 4.874z"></path></svg>

                            <p>Permissionless <br />Listings</p>
                        </div>
                    </Col>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M15.438 22.75a7.312 7.312 0 100-14.625 7.312 7.312 0 000 14.625zM36.563 22.75a7.312 7.312 0 100-14.625 7.312 7.312 0 000 14.625zM15.438 43.875a7.312 7.312 0 100-14.625 7.312 7.312 0 000 14.625zM36.563 43.875a7.312 7.312 0 100-14.625 7.312 7.312 0 000 14.625z"></path></svg>

                            <p>Fair and Equitable <br />Fundraising</p>
                        </div>
                    </Col>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M26 11.373C9.75 11.373 3.25 26 3.25 26S9.75 40.623 26 40.623 48.75 26 48.75 26 42.25 11.373 26 11.373z"></path><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M26 34.125a8.125 8.125 0 100-16.25 8.125 8.125 0 000 16.25z"></path></svg>

                            <p>Vesting and <br />Distribution</p>
                        </div>
                    </Col>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" fill="none" viewBox="0 0 38 36"><path stroke="#219bb5" d="M1 0v10M37 0v10m0 0v19a6 6 0 01-6 6H7a6 6 0 01-6-6V10m36 0l-5.293 1.176a10 10 0 01-7.026-1.02l-.825-.458a10 10 0 00-9.712 0l-.825.458a10 10 0 01-7.026 1.02L1 10"></path></svg>

                            <p>Fixed and Variable <br />Pools</p>
                        </div>
                    </Col>
                    <Col sm={4} xs={6} className="mb-4">
                        <div className="feature-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52"><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M26 21.125V7.312a4.062 4.062 0 10-8.125 0v24.633L13.42 24.23a4.062 4.062 0 10-7.036 4.063C12.999 42.25 17.024 47.125 26 47.125a16.25 16.25 0 0016.25-16.25V22.75a4.062 4.062 0 10-8.126 0"></path><path stroke="#219bb5" strokeLinecap="round" strokeLinejoin="round" d="M34.125 22.75v-2.438a4.062 4.062 0 10-8.125 0v.813"></path></svg>

                            <p>Intuitive User <br />Experience</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;