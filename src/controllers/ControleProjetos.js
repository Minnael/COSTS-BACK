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

export {buscarProjeto, criarProjeto} 