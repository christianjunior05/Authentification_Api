const mongodb = require('mongoose');
const { ObjectId } = require('mongodb')

const customer = mongodb.Schema({
    nomPrenoms :{
        type : String ,
        required : true
    } ,
    numeroTelephone : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true 
    },
    confirmPassword : {
        type : String ,
        required : true 
    }
})

const Customer = mongodb.model('customer' , customer)
module.exports = Customer
