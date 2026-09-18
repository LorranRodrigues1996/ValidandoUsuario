import mongoose from "mongoose";
import Comentario from "../models/Comentario.js"
/**
 * Adicionando um usuário ao banco de dados   
 */
const addComentario = async (req, res) => {
  console.log("Entrou na função addComentario()", req.body);
    const {
      usuarioId,
      postId,
      texto
    } = req.body;
  try {
    // 1. Criar o Aula
    const novoComentario = new Comentario({
      usuarioId,
      postId,
      texto
    });

    await novoComentario.save();

    res.json({ success: true, aula: novoComentario });
    console.log("Aula salvo com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Erro ao salvar Aula' });
  }
};

const listComentario = async (req, res) => {
    console.log("Acessou a função listComentario()")
    try {
    const aula = await Comentario.find()
    res.status(200).json({ success: true, aula });
    console.log(aula)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar aula', error: err });
    console.log(err)
  }
}

const listComentarioPorId = async (req, res) => {
    const postId = req.params.id;
    console.log(req.params.id)
    console.log(typeof postId)
    console.log("Acessou a função listComentarioPorId()")
    try {
    const comentarios = await Comentario.find({postId: new mongoose.Types.ObjectId(req.params.id)}) 
    res.status(200).json({ success: true, comentarios });
    console.log(comentarios)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar post', error: err });
    console.log(err)
  }
}

const getComentario = async (req, res) => {
  console.log("Acessou a função getComentario()")
  try {
    const aula = await Comentario.findById(req.params.id)
    if (!aula) {
      return res.status(404).json({ success: false, message: 'aula não encontrado' });
    }
    console.log(aula)
    res.json({ success: true, aula });
  } catch (error) {
    console.log("Erro ao recuperar dados do aula -------------------> getAula()",error)
    res.status(500).json({ success: false, error: 'Erro ao buscar aula', detalhes: error.message });
  }
};
export { addComentario, listComentario, getComentario, listComentarioPorId }