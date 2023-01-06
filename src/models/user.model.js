// import node modules 
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true
  },
  FirstName: String,
  LastName: String,
  Photo: {
    type: String, default: ""
  },
  Password: {
    type: String, required: true
  }
},
  { versionKey: false }

)

const userModel = mongoose.model('userList', userSchema)
module.exports = userModel