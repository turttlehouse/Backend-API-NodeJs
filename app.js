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

//Create Operation
app.post("/Createtasks",async(req,res)=>{
    // console.log("request received")
    const { title,Status } = req.body;

    // Check if title and Status are not empty
    if (!title || !Status) {
        return res.status(400).json({ error: "Title and Status are required fields." });
    }

    try{
        await tasks.create({
            title:title,
            Status:Status
        })

        res.status(201).json({
            message:"Task Created Successfully"
        });
    }

    catch(error)
    {
        res.status(500).json({error:"Internal Server Error"});
    }


})

//Read All Operation
app.get("/GetAllTasks", async (req, res) => {
    try {
        const allTasks = await tasks.findAll();

        res.status(200).json({
            message :" Tasks fetched successfully",
            tasks : allTasks
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// Single Read Operation
app.get('/SingleTask/:id', async (req, res) => {
    const taskId = req.params.id;

    try {
        const task = await tasks.findByPk(taskId);

        if (task) {
            res.status(200).json({
                message: "Task fetched successfully",
                task: task
            });
        } else {
            res.status(404).json({
                error: 'Task not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});


// Delete Operation
app.delete('/DeleteTask/:id', async (req, res) => {
    const taskId = req.params.id;

    try {
        const deletedRows = await tasks.destroy({
            where: {
                id: taskId
            }
        });

        if (deletedRows > 0) {
            res.status(200).json({
                message: "Task deleted successfully"
            });
        } else {
            res.status(404).json({
                error: 'Task not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});


// Update Operation
app.put('/UpdateTask/:id', async (req, res) => {
    const taskId = req.params.id;
    const { title, Status } = req.body;

    try {
        const [updatedRows] = await tasks.update(

            { title, Status },

            { where: 
                { 
                    id: taskId 
                }
            }
        );

        if (updatedRows > 0) {
            const updatedTask = await tasks.findByPk(taskId);
            res.status(200).json({
                message: "Task updated successfully",
                task: updatedTask
            });
        } else {
            res.status(404).json({
                error: 'Task not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});




app.listen(port,()=>{
    console.log("NodeJs project has started at port 5000")
})
