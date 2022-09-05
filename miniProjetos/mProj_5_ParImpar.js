//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

exibirTipos(2);
function exibirTipos(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
        console.log(i,'Par'); //i - está comparando 

    else 
        console.log(i,'Impar');

    }
}