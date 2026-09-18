// import Cursos from "../models/Produto.js"
// /**
//  * Adicionando um usuário ao banco de dados   
//  */
// const addProduto = async (req, res) => {
//   console.log("Entrou na função addProduto()", req.body);
//     const {
//       titulo,
//       descricao,
//     } = req.body;
//   try {
//     // 1. Criar o produto
//     const novoProduto = new Produtos({
//       titulo,
//       descricao,
//     });

//     await novoProduto.save();

//     res.json({ success: true, produto: novoProduto });
//     console.log("Produto salvo com sucesso!");
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Erro ao salvar produto' });
//   }
// };

// const listProdutos = async (req, res) => {
//     try {
//     const cursos = await Cursos.find()
//     res.status(200).json({ success: true, cursos });
//     console.log(cursos)
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Erro ao buscar cursos', error: err });
//     console.log(err)
//   }
// }

// const getCodigoProduto = async (req, res) => {
//   console.log("Acessou a função getCodigoProduto()")
//   try {
//     const curso = await Cursos.findById(req.params.id)
//     if (!curso) {
//       return res.status(404).json({ success: false, message: 'curso não encontrado' });
//     }
//     console.log(curso)
//     res.json({ success: true, curso });
//   } catch (error) {
//     console.log("Erro ao recuperar dados do curso -------------------> getProduto()",error)
//     res.status(500).json({ success: false, error: 'Erro ao buscar curso', detalhes: error.message });
//   }
// };
// export { addProduto, listProdutos, getCodigoProduto }