import mongoose from 'mongoose';

const aulaSchema = new mongoose.Schema({
    titulo: { type: String, },
    descricao: { type: String, },
});

const Aula = mongoose.model("Aula", aulaSchema)
export default Aula