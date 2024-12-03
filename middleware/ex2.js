const express= require('express');
const app=express();

const ValidateUserField= (req,res,next)=>{
    const{username,password}=req.body;

    //verifier si les champs "username" et "password" sont presents
    if(!username || !password){
        return res.statut(400).send('erreur ; les champs"username" et "passwor" sont requis');
    }
    next();
};

app post(`/login`, validateUserFields, (req,res)=>{
    res.send('connexion réussie');
});

app.listen(3000,()=>{
    console.log("serveur démarré sur le port 3000");
});