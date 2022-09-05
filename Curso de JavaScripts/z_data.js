let agora = Date.now();
console.log(agora); // por codigo


let agora1 = new Date ();
console.log(agora1); // padrao em ingles 

let dia = new Date ();
console.log(dia.getDate());

let ano = new Date ();
console.log(ano.getFullYear());

let mes = new Date ();
console.log(mes.getMonth()); // só que aqui comeca do mes "0" e 
// por isso aparece o mês 07. 

let mesPadraLocal = new Date ();
console.log(mesPadraLocal.toLocaleDateString("pt-BR"));