const express = require('express')
const router = express.Router()

// importation des controllers
const postCtrl = require ('../controllers/post')

// importation du middleware d'authentification et de multer
const auth = require('../middleware/auth')
const multer = require('../middleware/multer')

router.get('/', postCtrl.getAllPosts)
router.post('/',postCtrl.createPost)
router.get('/:id', postCtrl.getOnePost)
router.put('/:id', postCtrl.modifyPost)
router.delete('/:id', postCtrl.deletePost)
router.post('/:id/like', postCtrl.likePost)

module.exports= router
