import {useEffect, useRef, useState} from 'react'
// import robotLogo from '../src/assets/Robot.svg';
import './App.css'
import TypingArea from './components/TypingArea';
import Header from './components/Header';
import MessageDisplay from './components/MessageDisplay';


function App() {
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [messagePosted, setMessagePosted] = useState(false);
    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        if (isProcessing === true) {
            return;
        }

        if (inputRef.current.value.toString() === "") {
            alert("Please write a message.");
            console.log("strcheck")
            return;
        }


        console.log("submitting");

        console.log(inputRef.current.value.toString())
        setMessage(inputRef.current.value.toString());
        setMessagePosted(!messagePosted);

    }

    useEffect(() => {
        const fetchData = async () => {
            setIsProcessing(true);
            try {
                const gptResponse = await fetch("https://gpt3-chat-rn5z.onrender.com/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {"text": message}
                    )
                });

                const gptData = await gptResponse.json();
                if (gptResponse.status !== 200) {
                    throw gptData.error;
                }

                setResult(gptData.text);
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
            setIsProcessing(false);
        }
        if (message !== "") {
            inputRef.current.value = "";
            // setMessage("");
            fetchData();
        }

        return() =>{
            setResult("");
        }

    }, [messagePosted]);

    return (
        <div className="App">
            <Header/>
            <MessageDisplay message={message} result={result} isProcessing={isProcessing}/>
            <TypingArea handleSubmit={handleSubmit}
                inputRef={inputRef}/>
        </div>
    )
}

export default App
