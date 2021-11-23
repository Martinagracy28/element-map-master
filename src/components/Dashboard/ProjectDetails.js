/* global AlgoSigner */
import React, { Component, useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import {Container, Row, Col, ProgressBar, Tabs, Tab, ListGroup} from 'react-bootstrap';
import ReactDomServer from 'react-dom/server';
import ModalList from "../../components/ModalList";
import FolowStepsList from "../../components/FolowStepList";
import styles from "./ConnectWallet.module.sass";
import ModaldConnect from "../ModalDConnect";
import FolowStepsdConnect from "../FolowStepsdConnect";
import FolowStepOpt from  "../FolowStepOpt"
import FolowStepDonate from  "../FolowStepDonate"

// components
import SignUp from './snippets/SignUp';
import CopyClipboard from './snippets/CopyClipboard';

// assets
import Logo from '../../assets/images/crabada_icon.svg'; 
import Mediumicon from '../../assets/images/mediumicon.svg';
import Telegramicon from '../../assets/images/telegramicon.svg';
import Twittericon from '../../assets/images/twittericon.svg';
import Redirect from '../../assets/images/redirect.svg';
import Crabada1 from '../../assets/images/crabada1.png';
import crabada2 from '../../assets/images/crabada6.png';
import Alert from '../../assets/images/alert.png';
import Action1 from '../../assets/images/action-1-white.png';
import Action2 from '../../assets/images/action-2-white.png';
import Action3 from '../../assets/images/action-3-white.png';
import Action4 from '../../assets/images/action-4-white.png';
import Action5 from '../../assets/images/action-5-white.png';


const algosdk = require('algosdk');

function Airdrops() {
//     React.useEffect(() => {
//         window.scrollTo(0, 0);
//     });



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
    const[date,setdate]= useState("");
    const[time,settime]= useState("");
    const[map1,setMap]= useState([]);
    const[day,setTime4]= useState("");
    const[hour,setTim1]= useState("");
    const[min,setTim2]= useState("");
    const[sec,setTim3]= useState("");
    const[lock,setlock]= useState("");
    const [isListtry, setisListtry] = useState([]);
    const [isOpenOpt, setIsOpenOpt] = useState(false); 
    const [isOpenDonate, setIsOpenDonate] = useState(false); 
    const [dis, setDis] = useState("");
    const [getDonate, setGetDonate] = useState("");
    const [isGetDonate, setIsGetDonate] = useState(false); 

    //console.log("mapSet", map1);
    // let appId = setappid(46584645);

    let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
    let algodToken = {
      'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
    };
  
    let algodPort = "";
    
    let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);



    const waitForConfirmation = async function (client, txId) {
        let status = (await client.status().do());
        let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await client.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //Got the completed Transaction
              console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              break;
            }
            lastRound++;
            await client.statusAfterBlock(lastRound).do();
          }
        };  

        
        
        


const globalState = async (index) =>
{
      try {
        const r = await AlgoSigner.indexer({
          ledger: 'TestNet',
          path: `/v2/applications/${index}`
        });
        setMap(r.application['params']['global-state']);

        // console.log("R value", r);

        // map1.map((a)=>{
        //     console.log("map", a);
        // })

        // map1.forEach((element) => {
        //     console.log("Element", element)
        // });

        // let appArgsRet = [];
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][0]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][1]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][2]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][3]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][4]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][5]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][6]['key']));
        // appArgsRet.push(JSON.stringify(r['application']['params']['global-state'][7]['key']));
        // console.log("array", appArgsRet);

        // setrec(JSON.stringify(r['application']['params']['global-state'][0]['value'][`bytes`]));
        // setstartdt(JSON.stringify(r['application']['params']['global-state'][1]['value'][`uint`]));
        // settotal(JSON.stringify(r['application']['params']['global-state'][2]['value'][`uint`]));
        // setCreator(JSON.stringify(r['application']['params']['global-state'][3]['value'][`bytes`]));
        // setenddt(JSON.stringify(r['application']['params']['global-state'][4]['value'][`uint`]));
        // setclsdt(JSON.stringify(r['application']['params']['global-state'][5]['value'][`uint`]));
        // setgoal(JSON.stringify(r['application']['params']['global-state'][6]['value'][`uint`]));
        // setescrow(JSON.stringify(r['application']['params']['global-state'][7]['value'][`bytes`]));

        // for (let i = 0; i <= 7; i++) { 

        //                 if(appArgsRet[i] == '"Q3JlYXRvcg=="'){
        //                     let creatorAddress_c =  JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
        //                     // console.log("creator address", creatorAddress_c)
        //                     setCreator(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
        //                 }
        //                 else if(appArgsRet[i] == '"RW5kRGF0ZQ=="'){
        //                     let endDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
        //                     setenddt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
        //                 }
        //                 else if(appArgsRet[i] == '"RnVuZENsb3NlRGF0ZQ=="'){
        //                     let closeDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
        //                     setclsdt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
        //                 }
        //                 else if(appArgsRet[i] == '"R29hbA=="'){
        //                     let goalAmount_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
        //                     setgoal(goalAmount_c);
        //                 }
        //                 else if(appArgsRet[i] == '"UmVjZWl2ZXI="'){
        //                     let recv_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
        //                     setrec(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
        //                 }
        //                 else if(appArgsRet[i] == '"U3RhcnREYXRl"'){
        //                     let startDate_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
        //                     setstartdt(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
        //                 }
        //                 else if(appArgsRet[i] == '"VG90YWw="'){
        //                     let total_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]);
        //                     settotal(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`uint`]));
        //                 }
        //                 else if(appArgsRet[i] == '"RXNjcm93"'){
        //                     let escrow_c = JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]);
        //                     setescrow(JSON.stringify(await r['application']['params']['global-state'][i]['value'][`bytes`]));
        //                 }
        //                 let j = i + 1;
        //                 // console.log("time =", j, "then", JSON.stringify(await r['application']['params']['global-state'][6]['value'][`uint`]));
        //                 // console.log("state", goal);
        //                 // console.log("state", JSON.stringify(await r['application']['params']['global-state'][1]['value'][`uint`]));
        //                 // //let start = JSON.stringify(await r['application']['params']['global-state'][1]['value'][`uint`]);
        //                 let per = parseFloat((parseFloat(total/1000000)/parseFloat(goal/1000000)) * 100);
        //                 // console.log("----------------total =", total);
        //                 // console.log("----------------per =", per);
        //                 setPercent(per);
        //         }


        //return JSON.stringify(r['application']['params']['global-state'][7]['value'][`bytes`], null, 2);
      } catch (e) {
        //console.error(e);
        return JSON.stringify(e, null, 2);
      }
}

useEffect(async() =>{await fetch()},[goal, startdt, enddt, total])

useEffect(async() => {
    await first()
}, [day, hour, min, sec, lock]);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

const first = async () => {


    var us= enddt;
    var ff=new Date(us);
setdate(ff.toDateString());
var hours = ff.getHours();
  var minutes = ff.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  settime( hours + ':' + minutes + ' ' + ampm);
//settime(lock);
var countDowndate   =us * 1000;
//console.log(countDowndate);
// var countDownDate = new Date().getTime() + (lock * 1000) ;
//alert(time);
    var x = setInterval(function() {
       var now = new Date().getTime();
      var distance = countDowndate - now ;
    //   console.log("-------------------now", distance);
     // console.log(now);
      // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    //   console.log("date e", day);
    //   console.log("hour e", hour);
    //   console.log("min e", minutes);
    //   console.log("sec e", seconds);

      // Output the result in an element with id="demo"
     // document.getElementById("demo").innerHTML = hours + "h "
     // + minutes + "m " + seconds + "s ";
    setTime4(days);
    setTim1(hours);
    setTim2(minutes);
    setTim3(seconds);


    
    
    
    
      // If the count down is over, write some text 
      if (distance < 0) {
            clearInterval(x);
            setlock(false);

           // console.log('CountDown Finished');
        }
        else{
         setlock(true);
        }

    
      
    }, 1000);
   

}

const fetch = async () => {
let index = 46847111; //current app id need to be entered
setappid(index);
// await sleep(10000)
await globalState(index);
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
// console.log("----mapPercent----", mapPercent);


// const donate_popUp = () =>{
//     <><label>Enter Algos</label>
//     <input type="number">
//         id="addressid"
//         type='text'
//         placeholder='Enter Algos'
//         name="toaddress"
//         required
//         onChange={event => setisListtry( event.target.value)}
//         </input></>
//         setIsOpenlisttry(true);
//         return s
// }


// function MyVerticallyCenteredModal1(props) {
 
//     var [tid6,setId6] = useState([]);
    
//      const swap = async() => {
//         document.getElementById("mymodal").style.visibility="hidden";               
//          var a = document.getElementById("tid5").value;
//      //alert(maxtx);
//      if(a > 0){
//          setModalShow1(false);
//          setIsOpen(true); 
//        setDis("Successfully Swapped");
//         //  bvb();
//         }
           
//       else{
//           setIsOpen(true); 
//       setDis("The amount you entered must be less than the Maximum Transcation amount");
//       }
  
     
//     }
     
//     return (


 
//         <Modal
//           {...props}
//           style={{width:"500px" , marginLeft:"400px",}}
    
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           id="mymodal"
//           centered
//         >
//           <Modal.Header className="myModal" style={{backgroundColor:"#f5584b",color:"white"}} closeButton>
             
//             <Modal.Title id="contained-modal-title-vcenter" >
//               Enter Amount in Algos
//             </Modal.Title><br/><br/>
           
//           </Modal.Header>
          
//           <Modal.Body style={{backgroundColor:"#f5584b", color:"white"}}  className="myModal">
//             <InputGroup>
//       <InputGroup.Prepend>
//        <h5>Black : </h5>&nbsp;
//       </InputGroup.Prepend>
//       {/* <FormControl className="myInput" onChange={myfunct} id="tid5" aria-label="Amount (to the nearest dollar)" /><br/> */}
//       <InputGroup.Append>
      
   
//       </InputGroup.Append>
//     </InputGroup><br/>
//     <InputGroup>
//     <InputGroup.Prepend>
//        <h5 > BNB : &nbsp;&nbsp; </h5>
//        <h5 id="idprint">0.00</h5>
//       </InputGroup.Prepend>
//     </InputGroup>
//           </Modal.Body>
//           <Modal.Footer style={{backgroundColor:"#f5584b"}}  className="myModal">
//             <Button variant="primary" onClick={swap} style={{backgroundColor:"#e3e4e6", color:"#ff0083"}}>Donate</Button>
//           </Modal.Footer>
//         </Modal>
//       );
//     }



    return (

        <Layout>
        <ModaldConnect visible={isOpenOpt} onClose={() => setIsOpenOpt(false)}>
        <FolowStepOpt />
        </ModaldConnect>
        <ModaldConnect visible={isOpenDonate} onClose={() => setIsOpenDonate(false)}>
        <FolowStepDonate />
        </ModaldConnect>
            <Container fluid>
                <div className="py-100 pb-5 text-center">
                    <Row className="justify-content-center">
                        <Col lg={8} md={10}>
                            <h1 className="mb-4 pb-2 grad-line">A Fully-Decentralized <br /><span className="d-inline-block"><big>Play-and-Earn Idle Game</big></span></h1>
                            <p className="lead pt-2">Crabada is an exciting play-and-earn NFT game based in a world filled with <br />fierce fighting Hermit-Crabs called Crabada (the NFTs).</p>

                            <div className="social-media d-flex align-items-center justify-content-center">
                                <a href="/"><img src={Mediumicon} alt="Mediumicon" /></a>
                                <a href="/"><img src={Telegramicon} alt="Telegramicon" /></a>
                                <a href="/"><img src={Twittericon} alt="Twittericon" /></a>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row className="justify-content-center mb-5">
                    <Col lg={6}>
                        <div className="card-sale d-flex flex-column">
                            <div className="card-sale-heading d-flex flex-wrap align-items-start justify-content-between">
                                <div className="card-sale-title d-flex align-items-center">
                                    <img src={Logo} alt="logo" />
                                    <div className="ms-2">
                                        <p className="mb-0"></p>
                                        <h3 className="mb-0">IRIS</h3>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-cta ms-auto" style={{backgroundColor: "#e7e7e7"}} onClick={()=>setIsOpenOpt(true)}>Opt-In</button> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(opt-in only one time)</p>
                                </div>

                                <div className="text-end">
                                    <p className="mb-0">Price</p>
                                    <CopyClipboard value="1.84" preview="$1.84" />
                                    <p><CopyClipboard value="1" preview="1 Algos" /></p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="card-sale-total pb-2 d-flex flex-column align-items-start">
                                    <p className="mb-2">Round</p>
                                    {lock == true ? (<><h4 className="price">Sale In Progress</h4></>):(<><h4>Sale End</h4></>)}
                                </div>
                                <div className="card-sale-total pb-2 d-flex flex-column align-items-end">
                                    <p className="mb-2">Time left</p>
                                    {lock == true ? (<><h4 className="price">{day}d:{hour}h:{min}m:{sec}s</h4></>):(<><h4>{0}d:{0}h:{0}m:{0}s</h4></>)}
                                    
                                </div>
                            </div>

                            <div className="pt-sm-3 pt-5 position-relative">
                                <div className="progress_bar_tag"><p>Sale</p></div>
                                <div className="progress_bar_tag" style={{left: '100%'}}><p>End</p></div>
                                <ProgressBar now={mapPercent} />
                            </div>

                            <div className="d-flex mt-2 justify-content-between">
                                <p>{mapPercent}%</p>

                                <p className='d-flex'>
                                    <CopyClipboard value={mapTotal} preview={mapTotal} /> / <CopyClipboard value={mapGoal} preview={mapGoal} /> &nbsp; Algos
                                </p>
                                
                            </div>
                            {lock == false ? (<><button className="btn btn-cta ms-auto" style={{backgroundColor: "#e7e7e7"}} onClick={()=>setIsOpenDonate(true)}>Donate</button></>):(<><p style={{textAlign:"right"}}>(Claim can only performed by official creator)</p><button className="btn btn-cta ms-auto" style={{backgroundColor: "#e7e7e7"}} >Claim</button></>)}
                            
                            
                            <div className="card-sale-info mb-3 mb-md-4 pt-2 d-sm-flex align-items-start justify-content-between">
                                <div className="d-flex d-sm-block align-items-center justify-content-between">
                                    {/* <p>Token Distribution</p>
                                    <CopyClipboard value="22,222,222" preview="22.22M" /> */}
                                    <p>Goal Amount</p>
                                    <CopyClipboard value={mapGoal} preview={mapGoal} />&nbsp; Algos 
                                </div>
                                <div className="d-flex text-sm-end d-sm-block align-items-center justify-content-between">
                                    <p>Total Raised</p>
                                    <CopyClipboard value={mapTotal} preview={mapTotal} />&nbsp; Algos
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="py-50 mb-4">
                    <div className="steps_wrapper">
                        <div className="steps">
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action1} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Registration Opens</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action2} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Registration Closes</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action2} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Validator Round</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action3} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Staking Round</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action4} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Public Round</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>
                            <div className="step">
                                <div className="step-icon-wrapper">
                                    <div className="highlight">
                                        <img src={Action5} alt="icon" />
                                    </div>
                                </div>
                                <div className="step-text">
                                    <h4 class="title">Sale Ends</h4>
                                    <p class="date">Nov 2nd 2021</p>
                                    <p class="time">20:30 </p>
                                </div>
                            </div>

                            <div className="horizontal-line"></div>
                        </div>
                    </div>
                </div>

                <Row>
                    <Col xl={12} className="mb-4">
                    <Tabs defaultActiveKey="saleInfo" id="tab-airdrod">
                        <Tab eventKey="saleInfo" title="Sale Info">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Project Website</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <a href="https://www.crabada.com" className="me-2" target="_blank" rel="noreferrer"><img src={Redirect} alt="Redirect" /></a>
                                        <CopyClipboard value="https://www.crabada.com" preview="https://www.crabada.com" />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Number of Registrations</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <CopyClipboard value="15,290" preview="15,290" />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Vesting</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        100% TGE
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>TGE</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        Nov 13th 2021 at 17:30
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Sale Contract Address</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <a href="https://snowtrace.io/address/0x52f351A405AD70A931e03FeF20e97230F720F20B" className="me-2" target="_blank" rel="noreferrer"><img src={Redirect} alt="Redirect" /></a>
                                        <CopyClipboard value="0x52f351A405AD70A931e03FeF20e97230F720F20B" preview="0x52f351..." />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="tokenInfo" title="Token Info">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Token Name</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        Crabada
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Token Symbol</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        CRA
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Token Decimals</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <CopyClipboard value="18" preview="18" />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Total Supply</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <CopyClipboard value="1,000,000,000" preview="1,000,000,000" />
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center flex-wrap">
                                    <span>Token Address</span>

                                    <div className="d-flex align-items-center ms-auto">
                                        <a href="https://snowtrace.io/address/0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed" className="me-2" target="_blank" rel="noreferrer"><img src={Redirect} alt="Redirect" /></a>
                                        <CopyClipboard value="0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed" preview="0xA32608..." />
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="abouttheProject" title="About the Project">
                            <img src={Crabada1} alt="banner" className="img-fluid mb-4 mx-auto d-block" />
                            
                            <h5>Summary</h5>
                            <p><a href="https://www.crabada.com/" target="_blank" rel="noreferrer">Crabada</a> is an exciting play-and-earn NFT game based in a world filled with fierce fighting Hermit-Crabs called Crabada (the NFTs). Players will rediscover the prosperous ancient Kingdom of Crabada and earn rewards through activities such as mining, looting, breeding, battling, exploring, crafting, and more.</p>
                            <p>Crabada, being an idle game means that you’ll be able to play it anytime and anywhere with minimal disruption to your everyday life. Additionally, Crabada provides its players with not only entertainment value, but financial value as well. Crabada is bringing forth a new revolution in play-and-earn games with its unique PvP (Player Versus Player)-infused idle gameplay.</p>

                            <br />
                            <h5>Key Features</h5>
                            <ul>
                                <li>Mining Expeditions and Looting Missions</li>
                                <li>Crabada Breeding and Marketplace</li>
                                <li>Lending and Hiring Tavern</li>
                                <li>Robust Roadmap and Game Progression</li>
                                <li>Game Incentives and Rewards</li>
                            </ul>

                            <br/>
                            <h5>Tokens</h5>
                            <img src={Crabada1} alt="banner" className="img-fluid mb-4 mx-auto d-block" />

                            <p>In Crabada, players can play various game modes to earn CRA- the governance token, and TUS (Treasure Under Sea)- Crabada’s in-game currency.</p>
                            <p>Here are some of the play-and-earn mechanics.</p>
                            <img src={Crabada1} alt="banner" className="img-fluid mb-4 mx-auto d-block" />

                            <h5>1. Mining Expeditions and Looting Missions</h5>
                            <p>In these game modes, players send a team of three Crabada to mine for treasure, or to steal treasure from other players. Completion of each Expedition or Mission will earn the player rewards in CRA and TUS.</p>
                            <img src={Crabada1} alt="banner" className="img-fluid mb-4 mx-auto d-block" />

                            <h5>2. Breeding and Marketplace</h5>
                            <p>With 6 Factions, 8 Classes, 64 Breed Types and 6 Body Parts, the combinations of Crabada are practically endless. The Marketplace will support breeding activities, and decentralized trading of the Crabada for both avid players and collectors.</p>
                            <img src={Crabada1} alt="banner" className="img-fluid mb-4 mx-auto d-block" />

                            <h5>3. Cross-platform Battle Game (Q1 2022)</h5>
                            <p>Crabada will be available natively on mobile platforms in Q1 2022 with the release of a new and immersive Battle Game mode. Players can watch exciting battles unfold as their Crabada cast unique skills in claw-to-claw combat.</p>

                            <h3>Roadmap</h3>
                            <img src={crabada2} alt="banner" className="img-fluid mb-4 mx-auto d-block" />
                            <p>With the inclusion new PVE areas and campaigns, PVP Tournaments, Land Ownership, Equipments and even Co-Op World Boss Raids, Crabada has a robust road map and game progression planned ahead.</p>
                            <p>Crabada has forged long-term relationships with their strategic partners, investors and angels who are well-established in the space, such as The Avalanche Foundation, Avalaunch, Skyvision Capital, Not3Lau Capital, Zee Prime Capital, Devmons, Wangarian (Angel) and more.</p>

                            <br />
                            <h5>Tokenomics</h5>
                            <img src={Crabada1} alt="banner" className="img-fluid mb-3 mx-auto d-block" />
                            <img src={Crabada1} alt="banner" className="img-fluid mb-1 mx-auto d-block" />
                        </Tab>
                        <Tab eventKey="yourAllocations" title="Your Allocations">
                            <div className="text-center py-4">
                                <img src={Alert} width="120" className="mb-3" alt="alert" />
                                <p><strong>Unfortunately, you don't have any allocations for this sale.</strong></p>
                            </div>
                        </Tab>
                    </Tabs>
                    </Col>                    
                </Row>

                <div className="py-50">
                    <SignUp />
                </div>

            </Container>
        </Layout>
    );
}

export default Airdrops;