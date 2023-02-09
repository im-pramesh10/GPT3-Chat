import styles from "./MessageDisplay.module.css";
import logo from "../assets/Robot.svg";
import {useEffect, useRef} from "react";

export default function MessageDisplay({message, result, isProcessing}) {
    const gptResponseRef = useRef(null);

    useEffect(() => {
        let index = 0;
        let interval;

        if (gptResponseRef.current !== null) {
            gptResponseRef.current.innerText = "";
        }
        interval = setInterval(() => {
            if (index < result.length) {
                gptResponseRef.current.textContent += result.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
            // console.log("interval "+index);
        }, 50)

        return() => {
            clearInterval(interval);
        }
    }, [result]);

    useEffect(() => { // console.log("effect "+isProcessing);
        let intervalID;
        if (isProcessing) {
            gptResponseRef.current.textContent = "."

            intervalID = setInterval(() => {
                gptResponseRef.current.textContent += "."
                if (gptResponseRef.current.textContent === ".....") {
                    gptResponseRef.current.textContent = "."
                }
            }, 300)
        } else {
            clearInterval(intervalID);
        }

        return() => clearInterval(intervalID)
    }, [isProcessing])

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
                    <p ref={gptResponseRef}></p>
                </div>
            </div>
        );
    } else {
        return <></>
    }

}
