import { useEffect, useState } from "react";
import {abi} from "./abi.js";
import { ethers } from "ethers";

const Payment=({state})=>{
    
    const [con, setCon] = useState('');

    useEffect(()=>{
        async function work(){
            const provider = await new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
           
            const contract = new ethers.Contract('0x96111652DB352b814697e79A846E8CD9C8e11196', abi, signer);
            setCon(contract);
        }
        work();
    }, [])
    
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <button onClick={async()=>{
                        console.log(con)
                        await con.acceptWork();
                    }}>Accept</button>
                    <button onClick={async()=>{
                        await con.rejectWork();
                    }}>Reject</button>
                </div>
            </div>
        </div>
    )
}
export default Payment