import express from 'express'
import { addAula, listAula, getAula } from '../controllers/aulaController.js'

const router = express.Router()

router.post('/add', addAula)
router.get('/', listAula)
router.get('/:id/aulas', getAula)


export default router