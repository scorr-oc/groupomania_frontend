// Importation du modèle
const Post = require('../models/Post')

// Importation de la BDD
const mysqlconnection= require('../database/db')

// Importation du package fs de node pour supprimer les fichiers
const fs = require('fs')

exports.createPost = (req, res) => {
  // On récupère les informations du frontend à envoyer dans la BDD
  const title= req.body.title
  const description = req.body.description
  const image = req.file ? (`${req.protocol}://${req.get('host')}/images/${req.file.filename}` ):(" ")
  const createPost = new Post(title, description, image, req.user.userId)

// On enregistre les informations dans la BDD
  mysqlconnection.query(
    'INSERT INTO post SET ?', createPost, (error,results) => {
      if(error){
        res.status(400).json({error});
      }else {
    
        res.status(201).json({message:'Post enregistré!',createPost})
      }
    }
  )
}

  exports.getAllPosts = (req, res) => {
    mysqlconnection.query(
      'SELECT * FROM post',(error,results) => {
        if(error){
          res.status(400).json({error})
        }else{
          res.status(200).json(results)
        }
      }
    )  
  }

  exports.getOnePost = (req, res) => {
    const id = req.params.id
    mysqlconnection.query(
      'SELECT * FROM post WHERE idpost= ?',id,
    (error,results) => {
      if(error){
        res.status(500).json({error})
      }else {
      const post = results && results[0]
      if(!post){ 
        return res.status(404).json({ message: 'le post n\'existe pas' })
      }
        res.status(200).json(post)
      }
    })
  }

  exports.modifyPost = (req, res) => {

    const id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const image = req.file ? (`${req.protocol}://${req.get('host')}/images/${req.file.filename}`):('')
    const postUpdate = new Post (title,description,image)
    const getPost = ' SELECT * FROM post WHERE idpost = ?'
    const sqlUpdate = 'UPDATE post SET title = ?, description =?, image = ? WHERE idpost = ? '
   

    mysqlconnection.query(
      getPost,id, (error, results) => {
        if(error){
          res.status(500).json({ error })
        } else {
          if (results[0].author != req.user.userId) {
            res.status(401).json({ message :  'Vous n\'êtes pas autorisés à modifier ce message'})
          } else {
            const filename = results[0].image.split('/images/')[1]
            fs.unlink(`images/${filename}`,(error) =>{if(error) throw error})
            mysqlconnection.query(
              sqlUpdate,[title,description,image,id], (error,results) =>{
                if(error){
                  res.status(404).json({error})
                }else {
                  res.status(200).json({message: "post modifié!", postUpdate})
                }
              }
            )
          }
        }
      }
    )  
  }

  exports.deletePost = (req, res) => {

  const id = req.params.id
  const getPost = ' SELECT * FROM post WHERE idpost = ?'
  const sqlDelete = 'DELETE FROM post WHERE idpost=?'

    mysqlconnection.query(
      getPost,id, (error, results) => {
        if(error){
          res.status(500).json({ error })
        } else {
          if (results[0].author != req.user.userId) {
            res.status(401).json({ message :  'Vous n\'êtes pas autorisés à supprimer ce message'})
          } else {
            const filename = results[0].image.split('/images/')[1]
            fs.unlink(`images/${filename}`, () => {
              mysqlconnection.query(
                sqlDelete,id,(error,results) => {
                  if(error){
                    res.status(404).json({error})
                  }else {
                    res.status(200).json({message: "post supprimé !"})
                  }
                }
              )   
            })
            
          }                     
        }
      }
    )   
  }

exports.likePost = (req, res) => {
  
  const userLiking = req.body.userLiking
  const postId = req.body.postId
  const sqlLike = 'INSERT INTO likes (userliking, postid) VALUES (?,?)'

  mysqlconnection.query(
    sqlLike,[userLiking, postId],(err, results)=> {
      if(err){
        res.status(404).json({error})
      }else {
        res.status(200).json({message: "post liké !"})
      }
    })
}
