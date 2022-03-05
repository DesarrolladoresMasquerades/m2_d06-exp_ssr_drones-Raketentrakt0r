// Iteration #1

const mongoose = require('mongoose');
const Schema = mongoose.Schema; // {Schema, model} = mongose

const droneSchema = new Schema({
    name:{
        type:String,
    },
    propellers:{
        type:Number,
    },
    maxSpeed:{
        type:Number,
    }
})
