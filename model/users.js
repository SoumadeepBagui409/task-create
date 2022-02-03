const mongoose =require('mongoose');
const { mainModule } = require('process');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    referredUser:[{
        
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        
    }],
    isPaymentMade:{
        type:Boolean,
        default:false
    },
    TotalEarning:{
        type:Number,
        default: 0
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;