const customer_model = require('../models/customers.model')



module.exports.sign_up = async (req , res) =>{
    console.log(req.body)
    try{
        const { nomPrenoms , numeroTelephone ,  email ,  password , confirmPassword} = req.body

        const check_email = await customer_model.find({ email : email}).count()

        if(check_email==0){

            await customer_model.create({nomPrenoms : nomPrenoms ,  numeroTelephone :  numeroTelephone ,  email : email ,  password :  password , confirmPassword : confirmPassword})

            res.status(201).json({ status : true , error : 'NONE' , content : 'Client  enregistré avec succès .'})

        }else{
            res.status(409).json({ status : false , error : 'EMAIL_EXIST_DEJA' , content : 'Addresse mail déjà utilisé .'})
        }
    }catch(err){
        res.status(402).json({ status : false , error : 'MANQUE_DE_DATA' , content : 'Prière de renseigner toutes les informations .'})
    }
}