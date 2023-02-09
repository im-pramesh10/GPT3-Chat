import styles from "./MessageDisplay.module.css";
import logo from "../assets/Robot.svg";
import { useEffect, useRef } from "react";

export default function MessageDisplay({message, result, isProcessing}) {
    const gptResponseRef = useRef();
    useEffect(()=>{
        // console.log("effect "+isProcessing);
        let intervalID;
        if(isProcessing){
            console.log("inside loading")
            gptResponseRef.current.innerText="."
    
            intervalID = setInterval(()=>{
                gptResponseRef.current.innerText +="."
                if(gptResponseRef.current.innerText=== "....."){
                    gptResponseRef.current.innerText="."
                }
            },800)
        } else{
            clearInterval(intervalID);
        }
        
        return() => clearInterval(intervalID)
    },[isProcessing])
    
    if (message !== "") {
        return (
            <div className={
                styles.displaywrapper
            }>
                <div className={
                    styles.userquery
                }>
                    <p className={
                        styles.queryItem
                    }>
                        {message}</p>
                </div>
                <div className={
                    styles.gptresponse
                }>
                    <img className={
                            styles.resIcon
                        }
                        src={logo}/>
                    <p ref={gptResponseRef}>{result}</p>
                </div>
            </div>
        );
    }
    else{
        return <></>
    }

}
