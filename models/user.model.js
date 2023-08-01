/*  This is will hold the schema of the users
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    userId: {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true

    },
    email: {
      type : String,
      require : true,
      unique : true,
      minLength : 10,
      lowercase : true
    },
    userType : {
        type : String,
        require : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }

},{timestamps : true})


// Define the collection name where it will be stored
module.exports = mongoose.model('User', userSchema)
