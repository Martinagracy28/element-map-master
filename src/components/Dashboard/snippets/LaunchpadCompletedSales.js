import React, { Component } from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';

import {
    Link
  } from "react-router-dom";

// assets
import Logo from '../../../assets/images/crabada_icon.svg'; 
import Logo2 from '../../../assets/images/oh_finance_logo.jpeg'; 
import Status from '../../../assets/images/avax-icon.png'; 
import People from '../../../assets/images/people.svg'; 
import Calendar from '../../../assets/images/calendar.svg'; 
import Access from '../../../assets/images/access.svg'; 
import Clock from '../../../assets/images/clock.svg'; 
import Allocation from '../../../assets/images/allocation.svg'; 
import SaleProgress from '../../../assets/images/sale-progress.svg'; 

class CompletedSales extends Component {
    render() {
        return (
            <Row>
                <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to="/product-detail">
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src="https://static.wixstatic.com/media/13c029_2f5501f8918f48698e38b475ad1f8799~mv2.png/v1/crop/x_0,y_140,w_800,h_597/fill/w_575,h_434,al_c,q_85,usm_0.66_1.00_0.01/JPG_20File-01_png___cld_token__%3Dexp%3D1613.webp" alt="logo" /> Tree</h3>
                                <p>1 OH = 0.00113 Algos</p>
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">$600,000/600,000</h4>
                        </div>

                        <hr />

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={People} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Participants</p>
                                    <h3>0</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Calendar} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Start Date</p>
                                    <h3>10.21.2021</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Access} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Token Price</p>
                                    <h3>$0.081</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 pt-sm-3 pt-5 position-relative">
                            <div className="progress_bar_tag"><p>Sale</p></div>
                            <div className="progress_bar_tag" style={{left : '95.952%'}}><p>Airdrop</p></div>
                            <ProgressBar now={95.952} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Allocation} alt="Avalaunch" />
                                <div>
                                    <p>Tokens Sold: <span>34.48M</span></p>
                                    <p>Token Distribution: <span>36.36M</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={SaleProgress} alt="Avalaunch" />
                                <div>
                                    <p>Sale Progress <span>94.82%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                {/* <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to="/product-detail">
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src={Logo} alt="logo" /> RocoFinance</h3>
                                <p>1 CRA = 0.00022 Algos</p>
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">$0/400,000</h4>
                        </div>

                        <hr />

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={People} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Participants</p>
                                    <h3>3,259</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Calendar} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Start Date</p>
                                    <h3>09.02.2021</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Access} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Token Price</p>
                                    <h3>$0.011</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 pt-sm-3 pt-5 position-relative">
                            <div className="progress_bar_tag"><p>Sale</p></div>
                            <ProgressBar now={0} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Allocation} alt="Avalaunch" />
                                <div>
                                    <p>Tokens Sold: <span>34.48M</span></p>
                                    <p>Token Distribution: <span>36.36M</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={SaleProgress} alt="Avalaunch" />
                                <div>
                                    <p>Sale Progress <span>94.82%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to="/product-detail">
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src={Logo2} alt="logo" /> HurricaneSwap</h3>
                                <p>1 OH = 0.00113 Algos</p>
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">$600,000/600,000</h4>
                        </div>

                        <hr />

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={People} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Participants</p>
                                    <h3>9,974</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Calendar} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Start Date</p>
                                    <h3>10.21.2021</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Access} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Token Price</p>
                                    <h3>$0.081</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 pt-sm-3 pt-5 position-relative">
                            <div className="progress_bar_tag"><p>Sale</p></div>
                            <div className="progress_bar_tag" style={{left : '95.952%'}}><p>Airdrop</p></div>
                            <ProgressBar now={95.952} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Allocation} alt="Avalaunch" />
                                <div>
                                    <p>Tokens Sold: <span>34.48M</span></p>
                                    <p>Token Distribution: <span>36.36M</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={SaleProgress} alt="Avalaunch" />
                                <div>
                                    <p>Sale Progress <span>94.82%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to="/product-detail">
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src={Logo} alt="logo" /> Kalao</h3>
                                <p>1 CRA = 0.00022 Algos</p>
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">$0/400,000</h4>
                        </div>

                        <hr />

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={People} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Participants</p>
                                    <h3>3,259</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Calendar} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Start Date</p>
                                    <h3>09.02.2021</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Access} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Token Price</p>
                                    <h3>$0.011</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 pt-sm-3 pt-5 position-relative">
                            <div className="progress_bar_tag"><p>Sale</p></div>
                            <ProgressBar now={0} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Allocation} alt="Avalaunch" />
                                <div>
                                    <p>Tokens Sold: <span>34.48M</span></p>
                                    <p>Token Distribution: <span>36.36M</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={SaleProgress} alt="Avalaunch" />
                                <div>
                                    <p>Sale Progress <span>94.82%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to="/product-detail">
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src={Logo} alt="logo" /> Yay Games</h3>
                                <p>1 CRA = 0.00022 Algos</p>
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">$379,319/400,000</h4>
                        </div>

                        <hr />

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={People} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Participants</p>
                                    <h3>3,259</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Calendar} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Start Date</p>
                                    <h3>09.02.2021</h3>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Access} alt="Avalaunch" />
                                <div className="d-flex flex-grow-1 d-sm-block align-items-center justify-content-between">
                                    <p>Token Price</p>
                                    <h3>$0.011</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 pt-sm-3 pt-5 position-relative">
                            <div className="progress_bar_tag"><p>Sale</p></div>
                            <ProgressBar now={94} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Allocation} alt="Avalaunch" />
                                <div>
                                    <p>Tokens Sold: <span>34.48M</span></p>
                                    <p>Token Distribution: <span>36.36M</span></p>
                                </div>
                            </div>
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={SaleProgress} alt="Avalaunch" />
                                <div>
                                    <p>Sale Progress <span>94.82%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col> */}
            </Row>
        );
    }
}

export default CompletedSales;