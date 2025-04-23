const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);