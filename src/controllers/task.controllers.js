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

// view task 
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