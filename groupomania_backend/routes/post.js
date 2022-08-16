const express = require('express')
const router = express.Router()

// importation des controllers
const postCtrl = require ('../controllers/post')

// importation du middleware d'authentification et de multer
const auth = require('../middleware/auth')


const multer = require('../middleware/multer')

router.get('/',auth, postCtrl.getAllPosts)
router.post('/',auth,multer, postCtrl.createPost)
router.get('/:id',auth, postCtrl.getOnePost)
router.put('/:id',auth, postCtrl.modifyPost)
router.delete('/:id',auth, postCtrl.deletePost)
router.post('/:id/like',auth, postCtrl.likePost)

module.exports= router
