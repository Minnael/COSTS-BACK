import Categoria from "../models/Categorias.js"

async function buscarCategoria(resquest, response){
   const categoria = await Categoria.find()
   return response.json(categoria)
}

async function definirCategoria(request, response){
   const categoria = request.body
   const novaCategoria = await Categoria.create(categoria)
   return response.json(novaCategoria)
}

export {buscarCategoria, definirCategoria} 