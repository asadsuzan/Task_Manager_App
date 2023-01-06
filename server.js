// import node modules 
const dotenv = require('dotenv')
// import app modules 
const app = require('./app')

// configure dotenv 
dotenv.config({ path: './.env' })

// running port number  
const PORT = process.env.PORT

// run app 
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})