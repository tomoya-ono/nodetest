const express = require("express")
const app = express()

app.use(express.json())

app.post('/', function(req, res){
    console.log(req.body);
    res.json({message: "Fixed"})
    // res.send("Got a Post request")
    
})

app.get('/', function(req, res){
    res.send("<h1>Hello version2</h1>")
    
})

app.listen(3000, () => console.log("listening"))