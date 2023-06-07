const mongodb = require('mongoose');
const { ObjectId } = require('mongodb')

const users = mongodb.Schema({
    nom :{
        type : String ,
        required : true
    } ,
    prenom : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    }
})

const User = mongodb.model('users' , users)
module.exports = User
