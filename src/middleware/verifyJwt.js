// import node modules 
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config({ path: '../../.env' })

/* 
* Verify jwt token ===> verifyJwt
* Required ===> request headers
* E.g request headers ===> {
  token:'token'
}
* Success Response ===>   set decoded data to request headers and call next()
* Error Response if token expired  ===>      res.status(403).json({ status: "forbidden", message: "session time out" })
* Error Response if token expired  ===>    res.status(401).json({ status: "unauthorized", message: "invalid token" })
* Error Response if server error  ===>     res.status(400).json({ status: "fail", error })
*/

const verifyJwt = async (req, res, next) => {
  const { token } = req.headers
  const secreteKey = process.env.APP_SECRETE_KEY
  try {
    const decoded = await jwt.verify(token, secreteKey)
    req.headers['email'] = decoded.data
    next()

  } catch (error) {
    if (error?.expiredAt) {
      res.status(403).json({ status: "forbidden", message: "session time out" })
    } else if (error?.message) {
      res.status(401).json({ status: "unauthorized", message: "invalid token" })
    } else {
      res.status(400).json({ status: "fail", error })
    }
  }
}

module.exports = verifyJwt