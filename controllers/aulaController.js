import Aula from "../models/Aula.js"
/**
 * Adicionando um usuário ao banco de dados   
 */
const addAula = async (req, res) => {
  console.log("Entrou na função addAula()", req.body);
    const {
      titulo,
      descricao,
    } = req.body;
  try {
    // 1. Criar o Aula
    const novaAula = new Aula({
      titulo,
      descricao,
    });

    await novaAula.save();

    res.json({ success: true, aula: novaAula });
    console.log("Aula salvo com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Erro ao salvar Aula' });
  }
};

const listAula = async (req, res) => {
    console.log("Acessou a função listAula()")
    try {
    const aula = await Aula.find()
    res.status(200).json({ success: true, aula });
    console.log(aula)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar aula', error: err });
    console.log(err)
  }
}

const getAula = async (req, res) => {
  console.log("Acessou a função getAula()")
  try {
    const aula = await Aula.findById(req.params.id)
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
export { addAula, listAula, getAula }