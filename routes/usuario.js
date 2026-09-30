import express from 'express'
import { addUsuario, listUsuario, getUsuario, verificaAptidao } from '../controllers/usuarioController.js'

const router = express.Router()

router.post('/add', addUsuario)
router.get('/', listUsuario)
router.get('/verificaraptidao', verificaAptidao)
router.get('/:id/usuario', getUsuario)


export default router