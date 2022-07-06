const Mongoose = require('mongoose');
const url = process.env.MONGO_URI

async function ConnectDB() {
   await Mongoose.connect(url)
console.log('MongoDB database connected successfully')
}

module.exports=ConnectDB