const Mongoose = require('mongoose')
const timeStamp=require('mongoose-timestamp')

const addressSchema = Mongoose.Schema({
    home_address: {
        type: String,
        require: true,
        trim:true
    },
    delivery_address: {
        type: String,
        require: true,
        trim:true
    }

})


module.exports=Mongoose.model('Address', addressSchema)