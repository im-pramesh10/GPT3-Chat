import styles from './TypingArea.module.css';

const TypingArea = ({handleSubmit, inputRef})=> {
    return(
        <div className={styles.rootdiv}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input className={styles.textarea} 
                        type="textarea" 
                        ref={inputRef}
                />
                <button className={styles.button} type="submit"><svg className={styles.sendSVG} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>     
            </form>
        </div>
    );
}

export default TypingArea;