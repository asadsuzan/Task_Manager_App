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

/* 
* signIn user ===> signIn 
* Required ===> request headers
* E.g request headers ===> {
    email:user@email.com,
    password:1234
}
* Success Response with token ===>   res.status(200).json({ status: "success", data: { ...data[0], token } })
* Unauthorized Response ===>  res.status(401).json({ status: "unauthorized", message: "incorrect email or password" })
* Error Response ===>  res.status(400).json({ status: "fail", massage: error })
*/
exports.signin = async (req, res) => {
  const { email, password } = req.headers

  try {
    // db query for match user credentials 
    const data = await userModel.aggregate([{ $match: { Email: email, Password: password } },
    { $project: { _id: 0, Password: 0 } }
    ])

    // if query matched 
    if (data.length) {
      // generate a jwt access token for matched user 
      const payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: data[0].Email
      }
      const secreteKey = process.env.APP_SECRETE_KEY
      const token = await jwt.sign(payload, secreteKey)

      res.status(200).json({ status: "success", data: { ...data[0], token } })
    }
    // if query not  matched 
    else {
      res.status(401).json({ status: "unauthorized", message: "incorrect email or password" })
    }

  }
  // if there is ant server error
  catch (error) {
    res.status(400).json({ status: "fail", massage: error })
  }

}
