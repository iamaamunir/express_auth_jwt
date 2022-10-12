const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

function dbConnection(){
    mongoose.connect(MONGODB_CONNECTION_URL)
    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB connected successfully')
    })
    mongoose.connection.on('error', ()=>{
        console.log('Error connecting to MongoDB')
    })
}

module.exports = dbConnection