import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, InputGroup, FormControl, Table} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

// components
import BottomCards from './snippets/BottomCards';
import SignUp from './snippets/SignUp';

import Logo from '../../assets/images/crabada_icon.svg'; 
import Logo2 from '../../assets/images/oh_finance_logo.jpeg'; 

function Sales() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Container fluid>
                <div className="py-100 text-center">
                    <Row className="justify-content-center">
                        <Col lg={6} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">ELEMENT <br /><span className="d-inline-block"><big>Sales</big></span></h1>
                            <p className="lead pt-2">The list of the upcoming & completed ELEMENT Sales</p>
                        </Col>
                    </Row>
                </div>

                <div className="py-50 pt-0">
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <form action="/" className="search-bar">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </InputGroup.Text>
                                    <FormControl placeholder="Search by project name, token symbol or token contract address..." />
                                </InputGroup>
                            </form>
                        </Col>
                    </Row>
                </div>

                <div className="py-50 pt-0">
                    <h2 className="section-title"><span>Upcoming</span> Sales</h2>

                    <Table striped variant="light" responsive>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>IDO Token Price</th>
                                <th>Current Price</th>
                                <th>ATH</th>
                                <th>Max Return</th>
                                <th>No. Participants</th>
                                <th>Total Raised</th>
                                <th>Total Tokens Sold</th>
                                <th>Sale Ends At</th>
                                <th width="185">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo} alt="logo" />
                                        <div>
                                            <h5>Crabada</h5>
                                            <div className="muted">CRA</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>TBA</div></td>
                                <td><div>TBA</div></td>
                                <td><div>TBA</div></td>
                                <td><div>0</div></td>
                                <td><div>$0</div></td>
                                <td><div>0</div></td>
                                <td><div>Nov 9th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="py-50 pt-0">
                    <h2 className="section-title"><span>Completed</span> Sales</h2>

                    <Table striped variant="light" responsive>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>IDO Token Price</th>
                                <th>Current Price</th>
                                <th>ATH</th>
                                <th>Max Return</th>
                                <th>No. Participants</th>
                                <th>Total Raised</th>
                                <th>Total Tokens Sold</th>
                                <th>Sale Ends At</th>
                                <th width="185">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo} alt="logo" />
                                        <div>
                                            <h5>Crabada</h5>
                                            <div className="muted">CRA</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo2} alt="logo" />
                                        <div>
                                            <h5>Oh! Finance</h5>
                                            <div className="muted">OH</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo} alt="logo" />
                                        <div>
                                            <h5>Crabada</h5>
                                            <div className="muted">CRA</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo2} alt="logo" />
                                        <div>
                                            <h5>Oh! Finance</h5>
                                            <div className="muted">OH</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo} alt="logo" />
                                        <div>
                                            <h5>Crabada</h5>
                                            <div className="muted">CRA</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex project-name align-items-center">
                                        <img src={Logo2} alt="logo" />
                                        <div>
                                            <h5>Oh! Finance</h5>
                                            <div className="muted">OH</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div>$0.019</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>$0.081</div></td>
                                <td><div>10.78x</div></td>
                                <td><div>9,974</div></td>
                                <td><div>$600,000</div></td>
                                <td><div>7,500,000</div></td>
                                <td><div>Oct 26th 2021</div></td>
                                <td><div><Link to="/product-detail" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="py-50">
                    <BottomCards />
                </div>
                
                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Sales;