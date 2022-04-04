// Booleanos
let w = 5;
let x = 3;
let y = 5;
let z = "5";


console.log(w > x);
console.log(x < w);
console.log(w !== 5);

// compara se é do mesmo valor
console.log(w == z);

// compara se é do mesmo tipo e valor
console.log(w === z);


let idadeJoao = 22;
let idadeMaria = 15;

let joaoPodeEntrar = idadeJoao > 18;
console.log(joaoPodeEntrar);

let mariaPodeEntrar = idadeMaria > 18;
console.log(mariaPodeEntrar);


// Falsy
false;
undefined;
null;
("");
0;
NaN;

let stringVazia = "";
console.log(stringVazia == false);

// Condições if / else
if (x < 4) {
    console.log('Este é menor que quatro!');
    console.log('Whaddayaknow!')
} else {
    console.log('Este não é menor que quatro!');
}