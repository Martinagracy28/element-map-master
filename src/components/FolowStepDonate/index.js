/* global AlgoSigner */
import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
//import Icon from "../../../components/Icon";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";
import { useState } from "react";
//import fireDb from '../../UploadDetails/firebase';


const algosdk = require('algosdk');

const FolowStepDonate = ({ className,data,datas}) => {
  //console.log("listfollow",data[0].address)

  const [folow, setfolow] = useState("");
  const [aset, asetis] = useState(false);
  console.log("listfollow",folow)

  let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
  let algodToken = {
    'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
  };

  let algodPort = "";

  let appid = 46847111;
  
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


  const Donate =async () => {
    let amt = null;
    amt = document.getElementById("value").value;
    if(amt === null || amt === "" || amt === undefined)
    {
      alert("Check algo")
  }
  else{

    console.log("AppId =",appid.toString());
    // setIsOpenDonate(true);
  //   var amt =  window.prompt("Enter the amount you want to donate"); 
    let amount = parseInt(amt) * 1000000;
    let index = parseInt(appid);
    console.log("appId inside donate", index)
  // define sender
  
  // setaccount(localStorage.getItem("wallet"));
  let sender = localStorage.getItem("wallet");
  let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);
// get node suggested parameters
  let params = await client.getTransactionParams().do();
  // comment out the next two lines to use suggested fee
  params.fee = 1000;
  params.flatFee = true;

  let appArgs = [];
  appArgs.push(new Uint8Array(Buffer.from("donate")));
// let decAddr = algosdk.decodeAddress('EGUSS7HHM3ODVPW3Z2L55WPCZCR4TWSN2VVAKYPZKYEUER5BXM5N6YNH7I');
// appArgs.push(decAddr.publicKey);
//   console.log("(line:516) appArgs = ",appArgs)
localStorage.setItem("escrow", 'UCNBQEH4PMHT7FMX6FLJMIWS3LEFF4G5HUONQKSVXR2Y35HAPXJR2XVBH4');
  let recv_escrow = "UCNBQEH4PMHT7FMX6FLJMIWS3LEFF4G5HUONQKSVXR2Y35HAPXJR2XVBH4";
  // create unsigned transaction
  let transaction1 = algosdk.makeApplicationNoOpTxn(sender, params, index, appArgs)
  
  let transaction2 = algosdk.makePaymentTxnWithSuggestedParams(sender, recv_escrow, amount, undefined, undefined, params);  
  
  let txns = [transaction1, transaction2];
  let txgroup = algosdk.assignGroupID(txns);
  console.log("group = ", txgroup);

    let txn_b64_1 = transaction1.toByte();
    let txn_b64_2 = transaction2.toByte();

    //let signTx = [];

    // let signArr = AlgoSigner.signTxn([{txn: txn_b64_1}, {txn: txn_b64_2}]);
    let signArr = [txn_b64_1, txn_b64_2];
    let base64Txs = signArr.map((binary) => AlgoSigner.encoding.msgpackToBase64(binary));
console.log("line 1318");
    let signedTxs = await AlgoSigner.signTxn([
      {
        txn: base64Txs[0],
      },
      {
        txn: base64Txs[1],
      },
    ]);
  console.log("sign complete");
    let binarySignedTxs = signedTxs.map((tx) => AlgoSigner.encoding.base64ToMsgpack(tx.blob));
    let trans = await client.sendRawTransaction(binarySignedTxs).do().then(async(d)=>{
      console.log("success");
      console.log("Send complete");
      console.log("txID", trans);
      console.log("id", trans.txId);
     await waitForConfirmation(client, trans.txId);
     alert("Donated Successfully");
    }).catch((e)=>{
      console.log("Failure");
      alert("Transaction Failed")
    })
   
  }
  //  first();
  

    }
  
  return (
    <div >
      {/* <h1>{test}</h1> */}
      <div ></div>
      <div >

      <div >
          <div >
            {/* <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div> */}
            <center>
            <div >            
                <label style={{color:"black"}}>Enter Algos : &nbsp;</label><input id = "value" type = "number" />  <br />   <br />                        
                <button type="button" onClick={() => Donate()}>Donate</button> 
            </div> 
            </center>           
          </div>
          {/* onClick={onPrint(x.address)} */}
          {/* <button type="submit" className={cn("button-small", styles.button)} onClick={onClo()}>Done</button> */}


        </div>          
      </div>
    </div>
  );
};

export default FolowStepDonate;
