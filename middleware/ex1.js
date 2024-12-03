const express= require('express');
const app=express();

//middleware de journalisation
const loggerMiddleware=(req,res,next)=>{
    const now= new Date();
    const date= now.toLocaleDateString();
    const time= now.toLocaleTimeString();
    console.log(`[${date} ${time}] ${req.method}${req.path}`);
    next();
}

//utiliser le middleware dans l'application
app.use(loggerMiddleware);

// exemple de route pour tester le middleware
app.get('/',(req,res)=>{
    res.send('exercice1');
});

app.get('/exercice1',(req,res)=>{
    res.send('une deuxieme API');
});


app.listen(3000,()=>{
    console.log("serveur demarre sur le port 3000");
});