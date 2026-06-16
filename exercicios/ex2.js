const prompt = require('prompt-sync')();

let numeros = [];
let pares = 0;

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Digite o número: "));
    numeros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    }
}

console.log("Quantidade de números pares: " + pares);