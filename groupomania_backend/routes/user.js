const express = require ('express')

// Création du router
const router = express.Router()

// importation des controllers
const userCtrl = require ('../controllers/user')

// Création des routes POST pour récupérer les informations du front
router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router