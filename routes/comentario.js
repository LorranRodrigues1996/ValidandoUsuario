import express from 'express'
import { addComentario, listComentario, getComentario, listComentarioPorId } from '../controllers/comentarioController.js'

const router = express.Router()

router.post('/add', addComentario)
router.get('/', listComentario)
router.get('/:id', listComentarioPorId)
router.get('/:id/comentario', getComentario)


export default router