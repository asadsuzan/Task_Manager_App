// import node modules 
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config({ path: '../../.env' })
// import app modules 
const userModel = require("../models/user.model")


/* 
* Create new user ===> signup
* Required ===> request body
* E.g request body ===> {
  Please check user model at src => models => usersModel
}
* Success Response ===> res.status(201).json({ status: "success", data })
* Error Response ===>  res.status(400).json({ status: "fail", massage: error })

*/
exports.signup = async (req, res) => {
  const userData = req.body
  try {
    const data = await userModel.create(userData)
    res.status(201).json({ status: "success", data })
  } catch (error) {
    if (error?.keyPattern?.Email === 1) {
      res.status(409).json({ status: "forbidden", message: "Email already exits" })
    } else {
      res.status(400).json({ status: "fail", massage: error })
    }
  }
}
