import styles from "./MessageDisplay.module.css";
import logo from "../assets/Robot.svg";

export default function MessageDisplay() {
    return (
        <div className={
            styles.displaywrapper
        }>
            <div className={
                styles.userquery
            }>
                <p className={styles.queryItem}>hello</p>
            </div>
            <div className={
                styles.gptresponse
            }>
            <img className={styles.resIcon} src={logo}/>
                <p>gptResponse</p>
            </div>
        </div>
    );
}
