const express = require('express');
const openai = require('openai');
const configuration = new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const app = express();
const port = 5000;

app.listen(port)

app.get('/', (req, res)=>{
    res.json({'name': 'pramesh'})
})