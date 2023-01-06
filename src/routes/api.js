// import node modules 
const express = require('express')
// import app modules 
const userControllers = require('../controllers/user.controllers')
const TaskController = require('../controllers/task.controllers')
const verifyJwt = require('../middleware/verifyJwt')
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

/* 
Signin user 
Method => POST
Path => /signin
Required => request headers 
E.g request headers => {
   email:user@email.com,
    password:1234
}
* Success Response with token ===>   res.status(200).json({ status: "success", data: { ...data[0], token } })
* Unauthorized Response ===>  res.status(401).json({ status: "unauthorized", message: "incorrect email or password" })
* Error Response ===>  res.status(400).json({ status: "fail", massage: error })

*/
router.post('/signin', userControllers.signin)

// tasks ===> crud 

// create new task 
router.post('/task/save', verifyJwt, TaskController.createTask)

//view all task

router.get('/task/all', verifyJwt, TaskController.viewAllTask)





module.exports = router