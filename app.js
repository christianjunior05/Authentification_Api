const express = require("express") ;
const mongodb = require ("mongoose")
const bodyParser = require ("body-parser") ; 
const user_router = require('./router/user.router')
const delivery_router = require('./router/delivery.router')
const customer_router = require('./router/customer.router')

mongodb.connect('mongodb://127.0.0.1:27017/livrazone' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée !'));

const app = express() ;
app.use(bodyParser.json()) ;

app.use('/api/v1/' , user_router)
app.use('/api/delivery/' , delivery_router)
app.use('/api/customer/' , customer_router)

module.exports = app ;


