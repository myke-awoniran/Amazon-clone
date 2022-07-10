const Mongoose = require('mongoose')

const productSchema = Mongoose.Schema({
    category: {
        type: Mongoose.Schema.ObjectId,
        ref:'Category'
    },
    owner: {
        type: Mongoose.Schema.ObjectId,
        ref:'Owner'
    },
    title: {
    type:String,
      trim:true
    },
    description: {
        type: String,
        trim:true
    },
    photo: {
        type:String
    },
    Price: {
        type: Number,
        
    },
    stock_quantity: {
        type:Number
    },
    rating:[Number]
})

module.exports=Mongoose.model('Product', productSchema)