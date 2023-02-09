import logo from "../assets/Robot.svg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            GPT3<img src={logo}></img>Chat
        </div>
    );
}
 export default Header;