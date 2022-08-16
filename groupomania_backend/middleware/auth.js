const jwt = require('jsonwebtoken')

// Importation des variables d'environnement
const dotenv = require("dotenv");
dotenv.config()

module.exports = (req, res, next) => {
  try{
    
    // Récupération du token dans le header 
    const token = req.headers.authorization.split(' ')[1]
    // Décodage du token
    const decodedToken = jwt.verify(
      token,
      `${process.env.JWT_KEY_TOKEN}`)
    // Récupération de l'userId dans le token
    const userId = decodedToken.userId
    req.user = { userId }
    if(req.body.userId && req.body.userId !== userId) {
      throw '403: unauthorized request'
    }else {
      next()
    } 
  }
  catch (error) {
    res.status(401).json({error: new Error ('Requête invalide ')})
  }
}