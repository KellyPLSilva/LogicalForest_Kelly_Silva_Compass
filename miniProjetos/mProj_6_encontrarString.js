//Criar um método para ler propriedades de um objeto e 
//exibir somente as propriedades de tipo string q estão nesse objeto

const filme = {
    titulo: 'O Jogo da Imitação',
    ano: 2015,
    diretor: 'Morten Tyldum',
    personagem: 'Sr Alan Turing '

}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
      if(typeof obj[prop] ==='string')
    console.log(prop,obj[prop])
}