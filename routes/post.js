import express from 'express'
import { addPost, listPost, getPost, listPostPorId } from '../controllers/postController.js'

const router = express.Router()

router.post('/add', addPost)
router.get('/', listPost)
router.get('/:id', listPostPorId)
router.get('/:id/post', getPost)


export default router