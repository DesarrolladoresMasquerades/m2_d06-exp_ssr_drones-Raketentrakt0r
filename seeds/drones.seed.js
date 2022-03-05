// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

require('..db/index.js')

const drones = [
    {
    name:"General Atomics MQ-9 Reaper",
    proppeller:"4",
    masSpeed:18
    },
    {
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20
    },
    {
    name: "Courier 3000i", 
    propellers: 6, 
    maxSpeed: 18
    }
]

Drone.create(drones)
  .then(dronesFromDB => {

    return console.log(`Created ${dronesFromDB.length} drone`);
    
  })
  .catch(err => console.log(`An error occurred while creating books: ${err}`));
