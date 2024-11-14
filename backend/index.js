import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();


const app = express()
const port = 6969

/*------------------------Middelware-----------------*/
app.use(cors({
    origin: ['http://localhost:6969','http://localhost:5173','http://localhost:5174'],
    credentials : true
}))
// app.use(json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    try {
        res.send("Hey Darling!!") 
    } catch (error) {
        console.error(`Error occuring rendering '/' : ${error}`)
    }
})
app.post('/text',(req,res)=>{
    const text = req.body
    console.log(text);
    
    try {
        res.send(`Your text : ${text}`)
    } catch (error) {
        console.error(`Error occuring posting text : ${error}`)
    }
    console.log("Sending Message...");
    
})


/*-------------------------------BMI CAlC------------------------------------*/
const axios = require('axios');
const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: {
      weight: '150',    //height in cm 
      height: '1.83'    //height 
    },
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
  };
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

app.listen(port,()=>{
    console.log(`Server is running on  -http://localhost:${port}`);
})
