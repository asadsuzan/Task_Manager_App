// import app modules 
const taskModel = require("../models/task.model");
const userModel = require("../models/user.model")


/* 
* Create new task ===> createTask
* Required ===> request body
* E.g request body ===> {
  Please check task model at src => models => TaskModel
}
* Success Response ===>    res.status(201).json({ status: "success", data })
* Error Response ===>    res.status(400).json({ status: "fail", massage: error })

*/
exports.createTask = async (req, res) => {
  const task = req.body
  const { email } = req.headers
  try {
    const data = await taskModel.create({ ...task, TaskCreatorId: email })
    res.status(201).json({ status: "success", data })
  } catch (error) {
    res.status(400).json({ status: "fail", massage: error })
  }

}

// view all task 
exports.viewAllTask = async (req, res) => {
  const { email } = req.headers
  try {
    const data = await taskModel.find({ TaskCreatorId: email })
    if (data.length) {

      res.status(200).json({ status: "success", data })
    } else {
      res.status(200).json({ status: "success", data: "no task yet" })
    }
  } catch (error) {
    res.status(400).json({ status: "fail", massage: error })
  }

}
// view  task by category
exports.viewTaskByCat = async (req, res) => {
  const { email } = req.headers
  const category = req.params.category

  try {
    const data = await taskModel.find({ TaskCreatorId: email, TaskCategory: category, IsTaskCompleted: false, IsTaskImport: false })
    if (data.length) {
      res.status(200).json({ status: "success", data })
    } else {
      res.status(200).json({ status: "success", data: [] })
    }
  } catch (error) {
    res.status(400).json({ status: "fail", massage: error })
  }

}
// view completed  task 
exports.viewCompleted = async (req, res) => {
  const { email } = req.headers
  try {
    const data = await taskModel.find({ TaskCreatorId: email, IsTaskCompleted: true, })
    res.status(200).json({ status: "success", data })
  } catch (error) {
    res.status(400).json({ status: "fail", massage: error })
  }

}

// update task status 
exports.updateTaskStatus = async (req, res) => {
  const { email } = req.headers
  let { id, status } = req.params

  status === 'true' ? status = true : status = false
  console.log(id, status);
  try {
    const data = await taskModel.updateOne({ TaskCreatorId: email, _id: id }, { $set: { IsTaskCompleted: status, CompletedDate: status == true ? Date.now() : null } })
    res.status(202).json({ status: "success", data })
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", massage: 'kisu buji nai' })

  }

}

// delete single task by ID 
exports.deleteTask = async (req, res) => {
  const { email } = req.headers
  const { id } = req.params
  try {
    const data = await taskModel.deleteOne({ TaskCreatorId: email, _id: id })
    res.status(200).json({ status: "success", data })
  } catch (error) {
    res.status(400).json({ status: "fail", message: error })
  }

}