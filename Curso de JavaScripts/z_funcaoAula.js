//Verbo + Substantivo 
let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

//dois tipos de função
// Realiza uma tarefe, não devolve nada 

function dizerNome(){ 
    console.log('Kelly');
}

dizerNome();
//Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
  return valor*2;
}

// console.log(MultiplicarPorDois(5)); 

console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);

console.log(resultado);