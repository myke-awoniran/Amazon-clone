const Mongoose = require('mongoose');
// const userPassword = require('mongoose-user-password')
const timeStamp = require('mongoose-timestamp');
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

// userSchema.plugin(userPassword)
userSchema.plugin(timeStamp)
module.exports=Mongoose.model('User',userSchema)