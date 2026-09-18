import Usuario from "../models/Usuario.js"
/**
 * Adicionando um usuário ao banco de dados   
 */
const addUsuario = async (req, res) => {
  console.log("Entrou na função addUsuario()", req.body);
    const {
      nome,
      comentario,
    } = req.body;
  try {
    // 1. Criar o Aula
    const novoUsuario = new Usuario({
      nome,
      comentario,
    });

    await novoUsuario.save();

    res.json({ success: true, aula: novoUsuario });
    console.log("Aula salvo com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Erro ao salvar Aula' });
  }
};

const listUsuario = async (req, res) => {
    console.log("Acessou a função listUsuario()")
    try {
    const usuario = await Usuario.find()
    res.status(200).json({ success: true, usuario });
    console.log(usuario)
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao buscar usuario', error: err });
    console.log(err)
  }
}

const getUsuario = async (req, res) => {
  console.log("Acessou a função getUsuario()")
  try {
    const usuario = await Usuario.findById(req.params.id)
    if (!usuario) {
      return res.status(404).json({ success: false, message: 'usuario não encontrado' });
    }
    console.log(usuario)
    res.json({ success: true, usuario });
  } catch (error) {
    console.log("Erro ao recuperar dados do usuario -------------------> getusuario()",error)
    res.status(500).json({ success: false, error: 'Erro ao buscar usuario', detalhes: error.message });
  }
};
export { addUsuario, listUsuario, getUsuario }