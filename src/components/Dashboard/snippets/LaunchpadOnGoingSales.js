/* global AlgoSigner */
import React, { Component, useState, useEffect } from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';
import ReactDomServer from 'react-dom/server';
import {
    Link
  } from "react-router-dom";
//   import {Link, useNavigate} from 'react-router-dom';
// assets
import Logo from '../../../assets/images/crabada_icon.svg'; 
import Status from '../../../assets/images/avax-icon.png'; 
import People from '../../../assets/images/people.svg'; 
import Calendar from '../../../assets/images/calendar.svg'; 
import Access from '../../../assets/images/access.svg'; 
import Clock from '../../../assets/images/clock.svg'; 
import Allocation from '../../../assets/images/allocation.svg'; 
import SaleProgress from '../../../assets/images/sale-progress.svg'; 

function UpcomingSales(){

    const [accounts, setaccount] = useState("");
    let[startdt,setstartdt] = useState("");
    const[enddt,setenddt] = useState("");
    const[clsdt,setclsdt] = useState("");
    const[goal,setgoal] = useState("");
    const[total,settotal] = useState("");
    const[rec,setrec]= useState("");
    const[creator,setCreator]= useState("");
    const[escrow,setescrow]= useState("");
    const[appid,setappid]= useState("");
    const[percent,setPercent]= useState("");
    const[map1,setMap]= useState([]);
    console.log("mapSet", map1);


 


const globalState = async (index) =>
{
      try {
        const r = await AlgoSigner.indexer({
          ledger: 'TestNet',
          path: `/v2/applications/${index}`
        });
        setMap(r.application['params']['global-state']);

        console.log("R value", r);

        map1.map((a)=>{
            console.log("map", a);
        })




        map1.forEach((element) => {
            console.log("Element", element)
        });

        let appArgsRet = [];
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][0]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][1]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][2]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][3]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][4]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][5]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][6]['key']));
        appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][7]['key']));
        console.log("array", appArgsRet);

        // setrec(JSON.stringify(r['application']['params']['global-state'][0]['value'][`bytes`]));
        // setstartdt(JSON.stringify(r['application']['params']['global-state'][1]['value'][`uint`]));
        // settotal(JSON.stringify(r['application']['params']['global-state'][2]['value'][`uint`]));
        // setCreator(JSON.stringify(r['application']['params']['global-state'][3]['value'][`bytes`]));
        // setenddt(JSON.stringify(r['application']['params']['global-state'][4]['value'][`uint`]));
        // setclsdt(JSON.stringify(r['application']['params']['global-state'][5]['value'][`uint`]));
        // setgoal(JSON.stringify(r['application']['params']['global-state'][6]['value'][`uint`]));
        // setescrow(JSON.stringify(r['application']['params']['global-state'][7]['value'][`bytes`]));

        for (let i = 0; i <= 7; i++) { 

                        if(appArgsRet[i] == '"Q3JlYXRvcg=="'){
                            let creatorAddress_c =  JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
                            console.log("creator address", creatorAddress_c)
                            setCreator(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
                        }
                        else if(appArgsRet[i] == '"RW5kRGF0ZQ=="'){
                            let endDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
                            setenddt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
                        }
                        else if(appArgsRet[i] == '"RnVuZENsb3NlRGF0ZQ=="'){
                            let closeDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
                            setclsdt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
                        }
                        else if(appArgsRet[i] == '"R29hbA=="'){
                            let goalAmount_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
                            setgoal(goalAmount_c);
                        }
                        else if(appArgsRet[i] == '"UmVjZWl2ZXI="'){
                            let recv_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
                            setrec(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
                        }
                        else if(appArgsRet[i] == '"U3RhcnREYXRl"'){
                            let startDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
                            setstartdt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
                        }
                        else if(appArgsRet[i] == '"VG90YWw="'){
                            let total_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
                            settotal(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
                        }
                        else if(appArgsRet[i] == '"RXNjcm93"'){
                            let escrow_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
                            setescrow(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
                        }
                        let j = i + 1;
                        console.log("time =", j, "then", JSON.stringify(await r['application']['params']['global-state'][6]['value'][`uint`]));
                        console.log("state", goal);
                        console.log("state", JSON.stringify(await r['application']['params']['global-state'][1]['value'][`uint`]));
                        //let start = JSON.stringify(await r['application']['params']['global-state'][1]['value'][`uint`]);
                        let per = parseFloat((parseFloat(total)/parseFloat(goal/1000000)) * 100);
                        console.log("----------------per =", per);
                        setPercent(per);
                }


        //return JSON.stringify(r['application']['params']['global-state'][7]['value'][`bytes`], null, 2);
      } catch (e) {
        console.error(e);
        return JSON.stringify(e, null, 2);
      }
}

useEffect(async() =>{first()},[goal, startdt, enddt, total])

const first = async () => {
  let index = 46847111; //current app id need to be entered
//   localStorage.setItem("appId", index);
    globalState(index);
   
}

const mapTotal = map1.map((a)=>{
    return(
        <>{a.key === "VG90YWw=" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

const mapGoal = map1.map((a)=>{
    return(
        <>{a.key === "R29hbA==" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

const mapStartDate = map1.map((a)=>{
    return(
        <>{a.key === "U3RhcnREYXRl" ? ((new Date(parseFloat(a.value['uint'])*1000)).toLocaleString()).slice(0,10) : ''}</>
    )
})

const mapStartTime = map1.map((a)=>{
    return(
        <>{a.key === "U3RhcnREYXRl" ? ((new Date(parseFloat(a.value['uint'])*1000)).toLocaleString()).slice(11,23) : ''}</>
    )
})

const mapEndDate = map1.map((a)=>{
    return(
        <>{a.key === "RW5kRGF0ZQ==" ? ((new Date(parseFloat(a.value['uint'])*1000)).toLocaleString()).slice(0,10) : ''}</>
    )
})

const mapCreator = map1.map((a)=>{
    return(
        <>{a.key === "Q3JlYXRvcg==" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

const mapRecv = map1.map((a)=>{
    return(
        <>{a.key === "UmVjZWl2ZXI=" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

const mapEscrow = map1.map((a)=>{
    return(
        <>{a.key === "RXNjcm93" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

const mapCloseDate = map1.map((a)=>{
    return(
        <>{a.key === "RnVuZENsb3NlRGF0ZQ==" ? parseFloat(a.value['uint'])/1000000 : ''}</>
    )
})

let mapPercent = parseFloat(ReactDomServer.renderToString(mapTotal))/parseFloat(ReactDomServer.renderToString(mapGoal))*100;
console.log("----mapPercent----", mapPercent);

        return (
            <Row>
                <Col lg={6} className="mb-4">
                    <Link className="card-sale d-flex flex-column" to={{
  pathname: "/product-detail-Ongoing",
  state: [{id: 1}]
}}>
                        <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                            <div className="card-sale-status order-sm-2 ms-auto mb-sm-0 mb-2 d-flex align-items-center">
                                <span className="status badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    {startdt === new Date()}
                                    In Progress
                                </span>
                                <img src={Status} className="ms-3" alt="Status" />
                            </div>
                            <div className="card-sale-title">
                                <h3 className="d-flex mb-2 align-items-center"><img src={Logo} alt="logo" /> IRIS</h3>
                                {/* <p>1 CRA = 0.00022 Algos</p> */}
                            </div>
                        </div>

                        <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                            <p className="mb-2">Total Raised</p>
                            <h4 className="price">{(mapTotal)}/{mapGoal} Algos</h4>

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
                                    <p>Start Date - End Date</p>
                                    <h3>{mapStartDate} -</h3>
                                    <h3>{mapEndDate}</h3>
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
                            <ProgressBar now={mapPercent} />
                        </div>

                        <div className="card-sale-info pt-2 d-sm-flex align-items-start justify-content-between">
                            <div className="mb-sm-4 mb-3 d-flex align-items-sm-start align-items-center">
                                <img className="icon" src={Clock} alt="Avalaunch" />
                                <div>
                                    <p>Time Until Launch <span>Launched</span></p>
                                    <h6>{mapStartTime}</h6>
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
                                    <p>Sale Progress <span>{mapPercent}%</span></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div>
                        {map1.map((e)=>{
                            {if(e.key === "VG90YWw="){
                               //console.log("total-map = ", e.value['uint']) 
                               (<>Total = {e.value['uint']}</>)
                            }
                            if(e.key === "RW5kRGF0ZQ=="){
                                console.log("endDate-map = ", e.value['uint'])
                            }
                            if(e.key === "R29hbA=="){
                                console.log("goal-map = ", e.value['uint'])
                            }
                            if(e.key === "UmVjZWl2ZXI="){
                                console.log("recv-map = ", e.value['bytes'])
                            }
                            if(e.key === "U3RhcnREYXRl"){
                                console.log("startDate-map = ", e.value['uint'])
                            }
                            if(e.key === "RXNjcm93"){
                                console.log("escrow-map = ", e.value['bytes'])
                            }
                            if(e.key === "Q3JlYXRvcg=="){
                                console.log("creator-map = ", e.value['bytes'])
                            }
                            if(e.key === "RnVuZENsb3NlRGF0ZQ=="){
                                console.log("closeDate-map = ", e.value['uint'])
                            }
                        }
                        })}
                    </div>
                </Col>
            </Row>
        );

}

export default UpcomingSales;