const mongodb = require('mongoose');
const { ObjectId } = require('mongodb')

const delivery = mongodb.Schema({
    nomPrenoms :{
        type : String ,
        required : true
    } ,
    numeroTelephone : {
        type : String ,
        required : true
    },
    zoneCouverture : {
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
    }
})

const Delivery = mongodb.model('delivery' , delivery)
module.exports = Delivery
