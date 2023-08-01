const express = require('express');
const serverConfig = require('./Configs/server.config')
const dbConfig = require('./Configs/db.Config')
const mongoose = require('mongoose');
const app = express();

// Logic to connect the mongodb
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on('error',()=>{
    console.log('Error occured in the connecting the mongodb');
})
db.once('open',()=>{
    console.log('DB is connected')
})
app.listen(serverConfig.PORT,()=>{
    console.log('Server started on the port number ',serverConfig.PORT)
})