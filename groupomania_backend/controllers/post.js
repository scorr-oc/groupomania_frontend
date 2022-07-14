const express = require('express')
// Importation du modèle
const Post = require('../models/Post')

// Importation de la BDD
const mysqlconnection= require('../database/db')



exports.createPost = (req, res) => {
delete req.body.id
// On récupère les informations du frontend à envoyer dans la BDD
const title= req.body.title
const description = req.body.description
const image = req.body.image
const createPost = new Post (title,description,image)

// On enregistre les informations dans la BDD
mysqlconnection.query(
  'INSERT INTO post SET ?', createPost, (error) => {
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
      res.status(404).json({error})
    }else {
      res.status(200).json(results)
    }
  })
}

exports.modifyPost = (req, res) => {

  const id = req.params.id
  const title = req.body.title
  const description = req.body.description
  const image = req.body.image
  const postUpdate = new Post (title,description,image)
  const sqlUpdate = 'UPDATE post SET title = ?, description =?, image = ? WHERE idpost = ? '

  mysqlconnection.query(
    sqlUpdate,[title,description,id], (error,results) =>{
      if(error){
        res.status(404).json({error})
      }else {
        res.status(200).json({message: "post modifié!", postUpdate})
      }
    }
  )
}

exports.deletePost = (req, res) => {

const id = req.params.id
const sqlDelete = 'DELETE FROM post WHERE idpost=?'

mysqlconnection.query(
  sqlDelete,id,(error,results) => {
    if(error){
      res.status(404).json({error})
    }else {
      res.status(200).json({message: "post supprimé !"})
    }
  }
) 
}

exports.likePost = (req, res) => {
  
  // const userLiking = req.body.userLiking
  // const postId = req.body.postId
  // const sqlLike = 'INSERT INTO likes (userliking, postid) VALUES (?,?)'

  // mysqlconnection.query(
  //   sqlLike,[userLiking, postId],(err, results)=> {
  //     if(error){
  //       res.status(404).json({error})
  //     }else {
  //       res.status(200).json({message: "post liké !"})
  //     }
  //   })

//   Sauce.findOne({_id: req.params.id})
//   .then (sauce => {
//     if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1){
//       Sauce.updateOne(
//         { _id : req.params.id},
//         { $inc: {likes: 1},
//           $push: {usersLiked: req.body.userId}
//         }
//       )
//       .then(() => res.status(201).json({message: 'like +1'}))
//       .catch (error => res.status(400).json({error}))
//     }

//     if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0){
//       Sauce.updateOne(
//         { _id : req.params.id},
//         { $inc: {likes: -1},
//           $pull: {usersLiked: req.body.userId}
//         }
//       )
//       .then(() => res.status(201).json({message: 'likes 0'}))
//       .catch (error => res.status(400).json({error}))
//     }

//     if (!sauce.usersDisliked.includes(req.body.userId) && req.body.like === -1){
//       Sauce.updateOne(
//         { _id : req.params.id},
//         { $inc: {dislikes: 1},
//           $push: {usersDisliked: req.body.userId}
//         }
//       )
//       .then(() => res.status(201).json({message: 'dislikes +1'}))
//       .catch (error => res.status(400).json({error}))
//     }

//     if (sauce.usersDisliked.includes(req.body.userId) && req.body.like === 0){
//       Sauce.updateOne(
//         { _id : req.params.id},
//         { $inc: {dislikes: -1},
//           $pull: {usersDisliked: req.body.userId}
//         }
//       )
//       .then(() => res.status(201).json({message: 'dislike 0'}))
//       .catch (error => res.status(400).json({error}))
//     }
//   })
//   .catch(error => res.status(404).json({error}))
}
