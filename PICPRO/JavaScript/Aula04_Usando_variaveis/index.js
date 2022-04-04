console.log("Eu funciono! :)");
console.log("Arquivo de script externo");


let meuNumero = 17;
let outroNumero = 28;

console.log(meuNumero + outroNumero);
console.log(`Resultado: ${meuNumero + outroNumero}`);

// "var" e "let" são a mesma declaração, porém a "let"
// é a mais utilizada, a var ficou como "legacy".
var numeroTest = 100;
console.log(numeroTest);


// let: Pode haver reatribuição da variável.
let test1 = 50;
console.log(test1);
// aqui acontece a reatribuição.
test1 = 60;
console.log(test1);

// const: Não pode haver reatribuição da variável.
const test2 = 90;
console.log(test2);
// aqui causará um erro, pois ao utilizar o "const",
// não será possível reatribuir a variável.
test2 = 91;
console.log(test2);
