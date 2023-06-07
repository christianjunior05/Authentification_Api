const delivery_model = require('../models/delivery.model')



module.exports.sign_up = async (req , res) =>{
    console.log(req.body)
    try{
        const { nomPrenoms , numeroTelephone , zoneCouverture , email ,  password} = req.body

        const check_email = await delivery_model.find({ email : email}).count()

        if(check_email==0){

            await delivery_model.create({nomPrenoms : nomPrenoms ,  numeroTelephone :  numeroTelephone , zoneCouverture : zoneCouverture , email : email ,  password :  password})

            res.status(201).json({ status : true , error : 'NONE' , content : 'Livreur enregistré avec succès .'})

        }else{
            res.status(409).json({ status : false , error : 'EMAIL_EXIST_DEJA' , content : 'Addresse mail déjà utilisé .'})
        }
    }catch(err){
        res.status(402).json({ status : false , error : 'MANQUE_DE_DATA' , content : 'Prière de renseigner toutes les informations .'})
    }
}