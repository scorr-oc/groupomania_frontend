// Importation des variables d'environnement
const dotenv = require("dotenv");
dotenv.config()

// Importation de ma BDD
const mysqlconnection = require ('../database/db')

// Importation de bcrypt
const bcrypt = require('bcrypt')

// Importation de jsonwebtoken
const jwt = require('jsonwebtoken')


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    // données envoyées dans BDD
    const user = {
      email: req.body.email,
      password: hash
    }
    
    // requête SQL pour envoyer les données dans la BDD
    mysqlconnection.query(
      'INSERT INTO user SET?',user,
      (error, results) => {
        if(error){
          res.status(400).json({error})
        } else {
          res.status(201).json({ message : "utilisateur enregistré !"})
        }
      }
    )
  })
  .catch( error => res.status(500).json({error}))
}

exports.login = (req, res, next) => { 

const email = req.body.email

// Vérification si l'email récupéré se trouve dans la BDD
mysqlconnection.query(
  'SELECT * FROM user WHERE email=?',email,
  (error, results) => {
    if(error) {
      res.json({error})
    }else {
      
      // si l'email n'existe pas
      if(results == 0) {
        return res.status(404).json({error: "l'utilisateur n'existe pas !"})
      }

      // contrôle de la validité du mot de passe
      const password = results[0].password
      bcrypt.compare(req.body.password,password)
      .then(valid => {
        // si le mot de passe n'est pas correct
        if(!valid){
          return res.status(401).json({message: "mot de passe incorrect !"})
        }
        // si mdp correct, on envoie l'id de l'utilisateur et un token de connexion
        const userId = results[0].id
        
        // =>Génération du token
        const token = jwt.sign(
          {userId : userId},
          `${process.env.JWT_KEY_TOKEN}`,
          {expiresIn: "24h"}
        )
        
        res.status(201).json({ 
          userId: userId,
          token
        })
      }

      )
      .catch(
        error => res.status(500).json({error})
      )
 
    }
  }
)
}