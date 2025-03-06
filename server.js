const cors = require('cors')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/api/greet', (req,res)=>{
    try {
        let {name} = req.query;
        if(!name){
            return res.status(400).json({message: 'Name is required.'})
        }
        res.status(200).json({message: `Hello, ${name}! Welcome to Younglabs.`})
    } catch (error) {
        console.log("something went wrong", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


app.listen(PORT, ()=>{
    console.log(`server connected at port: http://localhost:${PORT}`);
    
})