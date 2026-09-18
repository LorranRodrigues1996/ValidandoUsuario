import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectToDatabase from './database/db.js'
// import produtoRouter from './routes/produto.js'
import aulaRouter from './routes/aula.js'
import comentarioRouter from './routes/comentario.js'
import postRouter from './routes/post.js'
import usuarioRouter from './routes/usuario.js'
connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
// app.use('/api/cursos', produtoRouter)
app.use('/api/aula', aulaRouter)
app.use('/api/comentario', comentarioRouter)
app.use('/api/post', postRouter)
app.use('/api/usuario', usuarioRouter)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});