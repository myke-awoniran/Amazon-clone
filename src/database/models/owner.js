const Mongoose = require('mongoose');

const ownerSchema = Mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    about: {
        type: String,
        trim:true
    },
    photo: {
        type:String
    }
});

module.exports = Mongoose.model('Owner', categorySchema);
