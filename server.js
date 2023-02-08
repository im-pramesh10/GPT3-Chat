require('dotenv').config();
const express = require('express');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', async (req, res)=>{

    const openairesponse= await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "You are a chatbot. Now, you will only talk to me as a human. The things that come after it will be my chats. what are you sure of?",
        temperature: 0.8,
        max_tokens: 500,
      });
    
      console.log(openairesponse.data.choices[0].text);
      res.send(openairesponse.data.choices[0].text);
})

// app.get('/h', (req,res)=>{
//     res.send('hello');
// })

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})