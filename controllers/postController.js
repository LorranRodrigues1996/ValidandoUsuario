import mongoose from "mongoose";
import Post from "../models/Posts.js"
/**
 * Adicionando um usuário ao banco de dados   
 */
const addPost = async (req, res) => {
  console.log("Entrou na função addPost()", req.body);
    const {
      nome,
      AulaId,
      comentario,
    } = req.body;
  try {
    // 1. Criar o Aula
    const novoPost = new Post({
      nome,
      AulaId,
      comentario,
    });

    await novoPost.save();

    res.json({ success: true, post: novoPost });
    console.log("Post salvo com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Erro ao salvar Post' });
  }
};

const listPost = async (req, res) => {
    console.log("Acessou a função listAula()")
    try {
    const post = await Post.find()
    res.status(200).json({ success: true, post });
    console.log(post)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar post', error: err });
    console.log(err)
  }
}
const listPostPorId = async (req, res) => {
    const aulaId = req.params.id;
    console.log(req.params.id)
    console.log(typeof aulaId)
    console.log("Acessou a função listAula()")
    try {
    const posts = await Post.find({aulaId: new mongoose.Types.ObjectId(req.params.id)}) 
    res.status(200).json({ success: true, posts });
    console.log(posts)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar post', error: err });
    console.log(err)
  }
}

const getPost = async (req, res) => {
  console.log("Acessou a função getAula()")
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ success: false, message: 'post não encontrado' });
    }
    console.log(post)
    res.json({ success: true, post });
  } catch (error) {
    console.log("Erro ao recuperar dados do post -------------------> getpost()",error)
    res.status(500).json({ success: false, error: 'Erro ao buscar post', detalhes: error.message });
  }
};
export { addPost, listPost, getPost, listPostPorId }