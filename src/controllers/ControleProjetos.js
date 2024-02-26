import Projeto from "../models/Projetos.js"

async function buscarProjeto(resquest, response){
   const projeto = await Projeto.find()
   return response.json(projeto)
}

async function criarProjeto(request, response){
   const projeto = request.body
   const novoProjeto = await Projeto.create(projeto)
   return response.json(novoProjeto)
}

async function deletarProjeto(request, response){
   const id = request.params.id
   await Projeto.findByIdAndDelete({_id: id})
   return response.status(200).json({response: "Usuario Deletado!"})
}

export {buscarProjeto, criarProjeto, deletarProjeto} 