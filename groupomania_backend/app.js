// Importation de express
const express = require('express')
// création de l'application express
const app= express ()


// Importation de la BDD
const mysql = require('./database/db')


// Importation des routers
const userRoutes = require ('./routes/user')
const postRoutes = require ('./routes/post')

// Import de path pour accéder au path du server
const path = require('path')

app.use(express.json())


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next()
})

// Gestion de la ressource /images par Express
app.use('/images',express.static(path.join(__dirname,'images')))


// enregistrement des routers pour les relier au front
app.use('/auth',userRoutes)
app.use('/post',postRoutes)

module.exports = app