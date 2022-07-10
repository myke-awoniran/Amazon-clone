const Mongoose = require('mongoose');

const categorySchema = Mongoose.Schema({

    type: {
        type: String,
        trim: true,
        unique: true,
        required:true
    },

});

module.exports = Mongoose.model('Category', categorySchema);
