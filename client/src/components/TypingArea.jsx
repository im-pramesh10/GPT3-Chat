import styles from './TypingArea.module.css';

const TypingArea = ({handleSubmit, setMessage, message})=> {
    return(
        <div className={styles.rootdiv}>
            <form onSubmit={handleSubmit}>
                <input type="textarea" 
                       value={message}
                       onChange={(e)=> setMessage(e.target.value)}
                />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}

export default TypingArea;