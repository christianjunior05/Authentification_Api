const user_model = require('../models/users.model')



module.exports.sign_up = async (req , res) =>{
    
    try{
        const { nom , prenom , email } = req.body

        const check_email = await user_model.find({ email : email}).count()

        if(check_email==0){

            await user_model.create({nom : nom , prenom : prenom , email : email})

            res.status(201).json({ status : true , error : 'NONE' , content : 'Utilisation enregistré avec succès .'})

        }else{
            res.status(409).json({ status : false , error : 'EMAIL_EXIST_DEJA' , content : 'Addresse mail déjà utilisé .'})
        }
    }catch(err){
        res.status(402).json({ status : false , error : 'MANQUE_DE_DATA' , content : 'Prière de renseigner toutes les informations .'})
    }
}