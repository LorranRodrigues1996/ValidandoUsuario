import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    nome: { type: String, },
    AulaId: { type: mongoose.Schema.Types.ObjectId, ref: "Aula" },
    comentario: { type: String }
});

const Post = mongoose.model("Post", postSchema)
export default Post