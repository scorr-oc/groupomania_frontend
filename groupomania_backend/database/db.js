// importation des variables d'environnement
const dotenv = require('dotenv')
dotenv.config()

// importation de MySQL
const mysql = require('mysql')


// paramètres de connexion à la BDD
const mysqlconnection = mysql.createConnection({
  host:'localhost',
  database: 'groupomania',
  user: `${process.env.USER}`,
  password:`${process.env.PASSWORD}`
})

// connexion à la base de données
mysqlconnection.connect((err)=> {
  if(err){
    console.log(`error connecting: ${err}`)
  }else {
    console.log('connecté à la base de données groupomania')
  }
})

module.exports = mysqlconnection


