import React from 'react';
import Layout from './Layout';
import {Container, Row, Col, Table} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
    Link
  } from "react-router-dom";

// components
import SignUp from './snippets/SignUp';
import CopyClipboard from './snippets/CopyClipboard';


import Logo from '../../assets/images/crabada_icon.svg'; 
import Logo2 from '../../assets/images/oh_finance_logo.jpeg'; 

const data1 = {
    labels: ['YAY', 'KLO', 'HCT', 'ROCO', 'OH', 'CRA'],
    datasets: [
      {
        label: 'Number of Participants',
        data: [3000, 7000, 6000, 8000, 10000, 12000],
        backgroundColor: '#343434',
        borderColor: '#343434'
    },
    {
        label: 'Number of Registrations',
        data: [3600, 10000, 6300, 8300, 10500, 14000],
        backgroundColor: '#000',
        borderColor: '#000'
      }
    ],
  };

const data2 = {
    labels: ['YAY', 'KLO', 'HCT', 'ROCO', 'OH', 'CRA'],
    datasets: [
      {
        label: 'Total Raised per Project',
        data: [3000, 7000, 6000, 8000, 10000, 12000],
        backgroundColor: '#000',
        borderColor: '#000'
    }]
  };
  
  const options = {
    responsive: true,
    type: "bar",
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

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
                            <h1 className="mb-4 pb-2 grad-line">Network <br /><span className="d-inline-block"><big>Stats</big></span></h1>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Successful Sales
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="5" preview="5" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Raised on ELEMENT
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="2,211,841.954" preview="$2,211,842" />
                            </div>
                        </div>
                    </Col>
                    {/* <Col sm={6} md={4} lg={3} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Algos Raised on ELEMENT
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="35,733.54996157" preview="35,734 Algos" />
                            </div>
                        </div>
                    </Col> */}
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Total Participants
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="35,871" preview="35,871" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Registered Users
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="51,214" preview="51,214" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Total KYCs
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="36,131" preview="36,131" />
                            </div>
                        </div>
                    </Col>
                    {/* <Col sm={6} md={4} lg={3} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Registered Avalanche Validators
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="437" preview="437" />
                            </div>
                        </div>
                    </Col> */}
                    <Col sm={6} md={4} lg={4} className="mb-2">
                        <div className="stak-card d-flex flex-column align-items-start px-4">
                            <p className="mb-2 d-flex align-items-center">
                                Verified C-Chain Wallets
                            </p>

                            <div className="d-flex flex-wrap align-items-center">
                                <CopyClipboard value="37,895" preview="37,895" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="md-2">
                        <div className="stak-card">
                            <h6 className="text-center mb-4">Number of Participants per Project</h6>

                            <Bar data={data1} options={options} />
                        </div>
                    </Col>
                    <Col md={6} className="md-2">
                        <div className="stak-card">
                            <h6 className="text-center mb-4">Total Raised per Project ($)</h6>

                            <Bar data={data2} options={options} />
                        </div>
                    </Col>
                </Row>

                <div className="py-50">
                    <h2 className="section-title"><span>Past</span> Sales</h2>

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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
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
                                <td><div><Link to="/" className="btn btn-cta">View More <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M.724 7.276L7.276.724M.724.724h6.552v6.552"></path></svg></Link></div></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                

                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Airdrops;