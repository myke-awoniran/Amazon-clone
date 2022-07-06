const Mongoose = require('mongoose');
const userSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required:true,
        
    },
    password: {
        type: String,
        required:true
    },
    address: {
        type: Mongoose.Schema.objectId,
        ref:'Address'
    }
})

module.exports=Mongoose.model('User',userSchema)