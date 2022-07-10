const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const url = process.env.MONGO_URI

async function ConnectDB() {
   await Mongoose.connect(url)
   console.log('MongoDB database connected successfully')
   mongoose.disconnect('error', () => {
      console.log(`mongoose got disconnected ::` ,error.message)
   })
}

module.exports=ConnectDB