import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const Banner = () => {
    return (
        <div className="home-banner bg-white text-dark">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        {/* <h2 className="subtitle">Interoperable Token Pools &amp; Auctions for the ELEMENT Blockchain.</h2> */}
                        <h1><span>The Future Is Here</span></h1>
                        <p className="title-about">The first crowdfunding protocol, exclusively for the Algorand ecosystem, offers promising and innovative projects in a fast, secure, and decentralized way.</p>
                        <span></span>
                    </Col>
                    <Col lg={12} >
                        <a className="btn" style={{backgroundColor: "black", color:"white"}} href="/" target="_blank" rel="noopener noreferrer">
                        See Upcoming projects
                            <svg xmlns="http://www.w3.org/2000/svg"  width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg>
                            </a>
                        <a className="btn" style={{backgroundColor: "black", color:"white"}} href="/" target="_blank" rel="noopener noreferrer">
                        Subscribe to New Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg>
                        </a>
                        <Link className="btn" style={{backgroundColor: "black", color:"white"}} to="/">
                            Farming
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg>
                        </Link>
                        <Link className="btn" style={{backgroundColor: "black", color:"white"}} to="/launchpad">
                            Launchpad
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg>
                        </Link>

                        <h4 className="platform-title d-none">Finally, a platform built <b>for:</b></h4>

                        <div className="banner-items flex-wrap  d-none">
                            <div className="banner-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none" viewBox="0 0 29 29"><path fill="url(#paint0_linear)" fillRule="evenodd" d="M6.86 14.008A6.86 6.86 0 106.858.29a6.86 6.86 0 000 13.719zm0 14.699a6.86 6.86 0 100-13.718 6.86 6.86 0 000 13.718zM28.415 7.149a6.86 6.86 0 11-13.718 0 6.86 6.86 0 0113.718 0zm-6.859 21.558a6.86 6.86 0 100-13.718 6.86 6.86 0 000 13.718z" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear" x1="28.416" x2="14.698" y1="14.989" y2="28.707" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6746"></stop><stop offset="1" stopColor="#FF0546"></stop></linearGradient></defs></svg>
                                Investors
                            </div>
                            <div className="banner-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none" viewBox="0 0 29 29"><path fill="url(#paint0_linear)" fillRule="evenodd" d="M2.248.29a2 2 0 00-2 2v11.75h6.875a6.875 6.875 0 006.875-6.875V.29H2.248zm4.875 14.667H.248v11.75a2 2 0 002 2h11.75v-6.875a6.875 6.875 0 00-6.875-6.875zM14.915.29h11.75a2 2 0 012 2v11.75H21.79a6.875 6.875 0 01-6.875-6.875V.29zm6.875 14.667a6.875 6.875 0 00-6.875 6.875v6.875h11.75a2 2 0 002-2v-11.75H21.79z" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear" x1="28.665" x2="14.915" y1="14.957" y2="28.707" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6746"></stop><stop offset="1" stopColor="#FF0546"></stop></linearGradient></defs></svg>
                                Teams
                            </div>
                            <div className="banner-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="none" viewBox="0 0 29 29"><path fill="url(#paint0_linear)" fillRule="evenodd" d="M.136 7.165a6.875 6.875 0 0013.75 0V.29H7.01A6.875 6.875 0 00.136 7.165zm6.875 7.792a6.875 6.875 0 000 13.75h6.875v-6.875a6.875 6.875 0 00-6.875-6.875zm21.54-7.792a6.875 6.875 0 01-13.749 0V.29h6.875a6.875 6.875 0 016.875 6.875zm0 14.667a6.875 6.875 0 00-13.749 0v6.875h6.875a6.875 6.875 0 006.875-6.875z" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear" x1="27.5" x2="0" y1="2" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6746"></stop><stop offset="1" stopColor="#FF0546"></stop></linearGradient></defs></svg>
                                Communities
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;