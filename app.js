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

//Create Operation
app.post("/Createtasks",renderCreatetasks)

//Read All Operation
app.get("/GetAllTasks", renderAlltasks);

// Single Read Operation
app.get('/SingleTask/:id', renderSingleTask);


// Delete Operation
app.delete('/DeleteTask/:id',deleteTask);


// Update Operation
app.put('/UpdateTask/:id', updateTask);

app.listen(port,()=>{
    console.log("NodeJs project has started at port 5000")
})
