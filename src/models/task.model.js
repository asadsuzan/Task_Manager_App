// import node modules 
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  TaskName: {
    type: String,
    required: true
  },
  TaskNote: {
    type: String,
    default: ""
  },
  TaskSteps: {
    type: Array,
    default: []
  },
  IsTaskCompleted: {
    type: Boolean,
    default: false
  },
  TaskCategory: {
    type: String,
    default: "none"
  },
  IsTaskImport: {
    type: Boolean,
    default: false
  },
  TaskCreatorId: {
    type: String,
    required: true
  },
  CreationDate: {
    type: Date,
    default: Date.now()
  },
  CompletedDate: {
    type: Date,
    default: null
  },
},
  {
    versionKey: false
  }

)

const taskModel = mongoose.model('taskList', taskSchema)
module.exports = taskModel