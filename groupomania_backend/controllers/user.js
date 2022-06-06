// Importation de ma BDD
const mysqlconnection = require ('../database/db')

// Importation de bcrypt
const bcrypt = require('bcrypt')


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

}