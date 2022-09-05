//Criar uma função q exibe a quantidade de *
//que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    let padrao = '';
    for(let linha =1;linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}

// codigo - com loop
exibirAsteriscosLoop(5);

function exibirAsteriscosLoop(linhas){

}

/*for(let linha =1; linha <= linhas; linha++){
    let padrao = '';
    for (let i = 0;i < linha; i++){
        padrao += '*';
    }
    console.log(padrao); */
