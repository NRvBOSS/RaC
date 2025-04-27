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
    ban:{
        type: String,
        required: true,
        enum:['Sedan', 'Hatchback', 'SUV', 'Coupe', 'Convertible']
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
        required: true,
    },
    gearbox:{
        type: String,
        required: true,
        enum: ['Automatic', 'Manual', 'Semi-Automatic']
    },
    gear:{
        type: String,
        required: true,
       enum: ['Front-wheel drive', 'Rear-wheel drive', 'All-wheel drive']
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
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ownerName: {
        type: String, required: true
    },
    ownerPhone: {
        type: String, required: true
    },
    city:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Car', carsSchema)