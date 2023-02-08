require('dotenv').config();
const cors = require('cors');
const express = require('express');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post('/', async (req, res)=>{
try {
    const prompt = req.body.text;
    const openairesponse= await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0.8,
        max_tokens: 3000,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });

    console.log(openairesponse.data.choices[0].text);
    res.json({"text": openairesponse.data.choices[0].text});
    }
catch(error){
    res.status(200).json({'error': error})
}

      
})

// app.get('/h', (req,res)=>{
//     res.send('hello');
// })

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})