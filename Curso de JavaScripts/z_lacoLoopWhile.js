//São 5 Loops
//1.For
for(let i =5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}
//2.Do....While
let i = 0;

do{
    console.log('digitando!',i);
    i++;
} while (i , 10);

//3.while


//4. for ....in
const pessoa = {
    nome: 'Kelly',
    idade:34
};
//chave valor - key-value
for(letchave in pessoa){
    console.log(chave, pessoa['nome']);

}

const cores = ['Vermelho','Azul', 'Verde'];
for(let indice in cores) {
    console.log(indice[indice])
}