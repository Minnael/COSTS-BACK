import {Router} from "express"
import { buscarCategoria, definirCategoria } from "./controllers/ControleCategorias.js"
import { buscarProjeto, criarProjeto, deletarProjeto } from "./controllers/ControleProjetos.js"

const routes = Router()

routes.get('/categorias', buscarCategoria)
routes.post('/categorias', definirCategoria)

routes.get('/projetos', buscarProjeto)
routes.post('/projetos', criarProjeto)
routes.delete('/projetos/:id', deletarProjeto)


export default routes