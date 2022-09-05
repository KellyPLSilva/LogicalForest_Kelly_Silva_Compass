// Faixa de Preço - array de objetos de faixa de preço 


let faixas = [
   {tooltip: 'até R$700', minimo: 0, maximo: 700},
   {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
   {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}

];

function criarFaixaPreco(tooltip, minimo, maximo) {
    return{
        tooltip,
        minimo, 
        maximo

    }
}

let faixa2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000),
]

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo

}

let faixa3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];

console.log(faixas);
console.log(faixa2);
console.log(faixa3);


