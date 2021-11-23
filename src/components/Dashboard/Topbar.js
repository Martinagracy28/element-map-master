/* global AlgoSigner */
import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";
import { AlgorandWalletConnector } from './AlgorandWalletConnector';
import ModalList from "../../components/ModalList";
import FolowStepsList from "../../components/FolowStepList";
import styles from "./ConnectWallet.module.sass";
import ModaldConnect from "../ModalDConnect";
import FolowStepsdConnect from "../FolowStepsdConnect";

function TopBar() {

    const [isListtry, setisListtry] = useState([]);
    const [isOpenlisttry, setIsOpenlisttry] = useState(false);    
    const [isListtrys, setisListtrys] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const[dis,setDis] = useState("");
   
    const Connectwallet=async()=>{                          
        AlgoSigner.connect()
        .then((d) => {
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then((d) => {    
          console.log("listaccount",d)
         localStorage.setItem("wallet",d[0].address)
         //window.location.reload();
          setisListtry(d)
          setIsOpenlisttry(true)  
        })
        .catch((e) => {
          console.error(e);
        }); 
        })
        .catch((e) => {
        console.error(e);
        });
        
                
                
            //     const networkid=await web3.eth.getChainId();
            //     console.log("network id",networkid);
            //     if(networkid!=56){
            //     setIsOpen(true);
            //     setDis("Connected to Wrong Network,Please connect to Binance Mainnet");
            //     }else{        
            //     window.ethereum.enable();          
            //     let accounts=await web3.eth.getAccounts();
            //    // web3.eth.getChainId().then(console.log);
            //    // const networkid=await web3.eth.getChainId();
            //    // console.log("network id",networkid);
            //     await web3.eth.getAccounts().then(()=>{          
            //         console.log("acc Binance",accounts[0])
            //         setwalletconnect(accounts[0])
            //         window.wallet=accounts[0];
                   
            //        localStorage.setItem("wallet",accounts[0])
            //        //sessionStorage.setItem("wallet", accounts[0]);
            //       }).then(()=>{
            //           window.location.reload()
            //       })
            //     console.log(accounts);
            //     }  
            }

            const Disconnect=()=>{            
        
        
              localStorage.setItem("wallet","")
              window.location.reload()
               
               
           }

    return (
        <div className="header-top d-flex">
            <ModaldConnect visible={isOpen} onClose={() => setIsOpen(false)}>
                <FolowStepsdConnect viewhistory={dis}  />
            </ModaldConnect>
            {localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "" || localStorage.getItem("wallet") === undefined ? (
                <button className="btn btn-cta ms-auto" onClick= {() => Connectwallet()}>Connect Wallet</button>
            ): (<>
                <button className="btn btn-cta ms" onClick= {() => Connectwallet()}>{localStorage.getItem("wallet").slice(0,5)}...{localStorage.getItem("wallet").slice(50,58)}</button><br />
                <button className="btn btn-cta ms-auto" onClick= {() =>Disconnect()}>Disconnect</button>
                </>
            )}
              


           
            <ModalList visible={isOpenlisttry} >
        <FolowStepsList className={styles.steps} data={isListtry} datas={(a)=>
        {
          setisListtrys(a)
          setIsOpenlisttry(false)          
          setIsOpen(true)
          localStorage.setItem("net","testnet")
        }
        }/>          
    </ModalList>
        </div>
    );
}

export default TopBar;