const express=require("express")

const {addTask , getAllTask , editTask}=require("../controllers/taskController")


const Router=express.Router()


Router.route("/").get(getAllTask).post(addTask)
Router.route("/:id").put(editTask)


module.exports = Router