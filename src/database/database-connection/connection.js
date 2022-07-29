const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const url = process.env.MONGO_URI;

async function ConnectDB() {
    return await Mongoose.connect(url);
}

module.exports = ConnectDB;
