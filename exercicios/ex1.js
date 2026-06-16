const prompt = require('prompt-sync')();

let numeros = [];
let numero;
let i;
for(i=0; i<6; i++){
    //numero.push = Number(prompt("Informe um número: "));
    numeros[i] = Number(prompt("Informe um número: "))
    if(numeros[i]>0){
        console.log(numeros[i]);
    }
}