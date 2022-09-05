// Divisivel por 3 = Fizz
//Divisivel por 5 = Buzz
//Divisivel por 3 e 5 = FizzBuzz
//Não divisel por 3 ou 5 = entrada
//Não é um número = 'Não é um número'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number') // (!== diferente numero)
     return 'Não é um número';

     if (entrada % 3 === 0 && entrada % 5 === 0)
     return 'FizzBuzz';

    if (entrada % 3 === 0)
     return 'Fizz';
     
    if (entrada % 5 === 0)
     return 'Buzz';
    
    return entrada;
}