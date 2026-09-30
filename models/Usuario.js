import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, },
    email: { type: String, },
    senha: { type: String, },
    ativo: { type: Boolean, },
});

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario