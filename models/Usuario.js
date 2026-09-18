import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, },
});

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario