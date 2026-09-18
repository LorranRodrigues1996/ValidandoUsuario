import mongoose from 'mongoose';

const comentarioSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },

  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true
  },

  texto: {
    type: String,
    required: true
  },

  criadoEm: {
    type: Date,
    default: Date.now
  }
});

const Comentario = mongoose.model("Comentario", comentarioSchema);

export default Comentario;