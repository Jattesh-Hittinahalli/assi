const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true

    },

    age:{
        type:Number,
        required:true
    },

    marks:{
        type:Number,
        required:true
    }
    

},
{timestamps: true},
)


module.exports = mongoose.model('assi',userSchema);

