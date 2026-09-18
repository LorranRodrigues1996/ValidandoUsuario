import express from 'express'
import { addUsuario, listUsuario, getUsuario } from '../controllers/usuarioController.js'

const router = express.Router()

router.post('/add', addUsuario)
router.get('/', listUsuario)
router.get('/:id/usuario', getUsuario)


export default router