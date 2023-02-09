import { useRef, useState } from 'react'
import robotLogo from '../src/assets/Robot.svg';
import './App.css'
import TypingArea from './components/TypingArea';

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting");
    console.log(inputRef.current.value.toString())
    setMessage(inputRef.current.value.toString());
    inputRef.current.value="";
    try{
      const gptResponse = await fetch("https://gpt3-chat-rn5z.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"text": message}),
      });

      const gptData = await gptResponse.json();
      if(gptResponse.status !== 200){
        throw gptData.error;
      }

      setResult(gptData.text);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="App">
    <div>{result}</div>
      <TypingArea handleSubmit={handleSubmit} inputRef={inputRef}/>
    </div>
  )
}

export default App
