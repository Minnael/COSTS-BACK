import mongoose from "mongoose"

const numeros = new Set();

function numeroAleatorio() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 1000) + 1;
    } while (numeros.has(numero));

    numeros.add(numero);
    return numero;
}

const projetoEsquema = new mongoose.Schema({
   _id: {
      type: Number,
      default: () => numeroAleatorio()
   },
   nome: {
      type: String,
      required: true
   },
   orcamento: {
      type: Number,
      required: true
   },
   categoria: {
      type: String,
      required: true
   },
})

export default mongoose.model('Projetos', projetoEsquema)