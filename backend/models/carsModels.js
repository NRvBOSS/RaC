const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required:true
    },
    roof:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    mileage:{
        type: Number,
        required: true
    },
    sale:{
        type: Boolean,
        required: true
    },
    rent:{
        type: Boolean,
        required: true
    },
    people:{
        type: Number,
        required: true
    },
    engine:{
        type: String,
        required: true
    },
    gearbox:{
        type: String,
        required: true
    },
    gear:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
      type:String,
      required:true
    },
    owner:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
}, { timestamps: true})

module.exports = mongoose.model('Car', carsSchema)