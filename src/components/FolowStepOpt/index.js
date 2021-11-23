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

const Optin = async (event) =>{

  // define sender
  let sender = localStorage.getItem("wallet");
  let index = parseInt(appid);
   console.log("appid",index);
  console.log("sender complete", sender);
  let txID;
  // get node suggested parameters
  let params = await client.getTransactionParams().do();
  // comment out the next two lines to use suggested fee
  params.fee = 1000;
  params.flatFee = true;

  // create unsigned transaction
  let txn = algosdk.makeApplicationOptInTxn(sender, params, index);
  console.log("txn complete")
  let txId = txn.txID().toString();
  let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
  let signedTxs = await AlgoSigner.signTxn([{txn:txn_b64}]);
  console.log("txn signing")
  let signedT = AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
  let transcat = await client.sendRawTransaction(signedT).do();
  console.log("txn working")
  await waitForConfirmation(client, transcat.txId);
  alert("optin Completed");
  // first();
//   var firebase= fireDB.database().ref("optinAddress");
// firebase.push({accounts});
// console.log("pushed")
   }

const FolowStepsOpt = ({ className,data,datas}) => {
  //console.log("listfollow",data[0].address)

  const [folow, setfolow] = useState("");
  const [aset, asetis] = useState(false);
  console.log("listfollow",folow)

  
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
            <div >            
                  <button type="button" onClick={() => Optin()}>Optin</button>                               
            </div>            
          </div>
          {/* onClick={onPrint(x.address)} */}
          {/* <button type="submit" className={cn("button-small", styles.button)} onClick={onClo()}>Done</button> */}
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
        </div>          
      </div>
    </div>
  );
};

export default FolowStepsOpt;
