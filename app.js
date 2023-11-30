const express = require("express")
const app = express()

const port = 5000;

//For Database Connection
require("./model/index.js")

//Parsing the Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing the task model
const { tasks }  = require("./model/index.js");
//importing function from controller
const { renderCreatetasks, renderAlltasks, renderSingleTask, deleteTask, updateTask } = require("./controller/task/taskController.js");

//Routes here
const taskRoute = require("./routes/taskRoute")
app.use("/",taskRoute)


app.listen(port,()=>{
    console.log("NodeJs project has started at port 5000")
})
