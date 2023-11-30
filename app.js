const express = require("express")
const app = express()

const port = 5000;

//For Database Connection
require("./model/index.js")

//Parsing the Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes here
const taskRoute = require("./routes/taskRoute")
app.use("/",taskRoute)

app.listen(port,()=>{
    console.log("NodeJs project has started at port 5000")
})
