import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";

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

app.listen(port,()=>{
    console.log(`Server is running on  -http://localhost:${port}`);
})