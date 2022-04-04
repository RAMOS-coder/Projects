let numbers = [1, 2, 3];
let frutas = ["banana", "maça", "laranja", "pêra"];
let numerosEFrutas = [1, "banana", "3", "maça"];

console.log(numbers);
console.log(frutas);
console.log(numerosEFrutas);

let predio = [
    "terreo",
    "primeiroAndar",
    "segundoAndar",
    "terceiroAndar",
    "quartoAndar",
];

console.log(predio);
console.log(predio[3]);
console.log(predio[5]);

// push: acrecenta um "item" a ultima posição do Array.
predio.push("quintoAndar");
console.log(predio);
console.log(predio[5]);

// pop: retira o ultimo "item" da posição do Array.
predio.pop();
console.log(predio);

// unshift: adiciona um "item" na primeira posição do Array.
predio.unshift("subsolo");
console.log(predio);

// shift: remove um "item" da primeira posição do Array.
predio.shift();
console.log(predio);