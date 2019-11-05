//imports and dependencies
const express = require('express');
const CarRouter = require('./CarRouter');
const db = require('./data/dbConfig');

//server
const server = express();

//middleware
server.use(express.json());
server.use('/api/cars', CarRouter)

//server test

server.get('/', (req, res) => {
    res.send('Test')
})

//export
module.exports = server