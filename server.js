const express = require('express');
const serverConfig = require('./Configs/server.config')
const dbConfig = require('./Configs/db.Config')
const mongoose = require('mongoose');
const userModel = require('./models/user.model')
const bcrypt = require('bcrypt')
const app = express();

// Logic to connect the mongodb
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on('error',()=>{
    console.log('Error occured in the connecting the mongodb');
})
db.once('open',()=>{
    console.log('DB is connected'),
    
    init()
})

async function init(){

    let user = userModel.findOne({userType:"admin"})
    if(user){
        console.log("The admin is already present")
        return ;
    }
    // creating admin user
   const admin = await userModel.create({
        name : "Santhosh Kumar",
        userId : "admin",
        email : "santhosh102002@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync("welcome1",8)

    })
    console.log(admin)
}
app.listen(serverConfig.PORT,()=>{
    console.log('Server started on the port number ',serverConfig.PORT)
})