//importing function from controller
const { CreateTasks,renderAlltasks, renderSingleTask, deleteTask, updateTask } = require("../controller/task/taskController");

const router = require("express").Router()

//CreateRoute
router.route("/Createtasks").post(CreateTasks)

//Read All Route
router.route("/GetAllTasks").get( renderAlltasks)

//Single Read,Update Route, Delete Route
router.route("/:id").get(renderSingleTask).put(updateTask).delete(deleteTask)


//SingleRead Route
// router.route("/SingleTask/:id").get(renderSingleTask)


//DeleteRoute
// router.route("/DeleteTask/:id").delete(deleteTask)

//updateRoute
// router.route("/UpdateTask/:id").put(updateTask)


module.exports = router;