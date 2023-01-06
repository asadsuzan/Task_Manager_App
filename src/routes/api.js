// import node modules 
const express = require('express')
// import app modules 
const userControllers = require('../controllers/user.controllers')
// setup routes 
const router = express.Router()
/* 
Create a new user 
Method => POST
Path => /signup
Required => request body 
E.g request body  => {
  please check the  userModel at src=>models=>userModel.js
}
* Success Response ===> res.status(201).json({ status: "success", data })
* Error Response ===>  res.status(400).json({ status: "fail", massage: error })

*/
router.post('/signup', userControllers.signup)

module.exports = router