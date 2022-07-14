// Importation de express
const express = require('express')
// création de l'application express
const app= express ()


// Importation de la BDD
const mysql = require('./database/db')

// Importation des routers
const userRoutes = require ('./routes/user')
const postRoutes = require ('./routes/post')
// pour logger une requête
const morgan = require('morgan')

app.use(express.json())

app.use(morgan("dev"))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next()
})

// enregistrement des routers pour les relier au front
app.use('/auth',userRoutes)
app.use('/post',postRoutes)

module.exports = app