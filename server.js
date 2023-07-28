const express = require('express');
const serverConfig = require('./Configs/server.config')
const app = express();

app.listen(serverConfig.PORT,()=>{
    console.log('Server started on the port number ',serverConfig.PORT)
})