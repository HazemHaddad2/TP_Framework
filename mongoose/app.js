const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();
const app = express();

//MiddleWare
app.use(cors()); //pour autoriser les requetes cross-origin
app.use(express.json()); //pour analyser les requetes JSON

//routes
app.use('/api/user',authRoutes);

//Demarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'execution sur le port ${PORT}`);
});