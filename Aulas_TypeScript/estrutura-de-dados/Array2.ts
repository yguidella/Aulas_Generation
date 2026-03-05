import readlinesync = require("readline-sync");

const notas: Array<number> = [5,6,7,9,4,3,1];

for(let nota of notas){ // percorre o array conforme o tamanho da lista
    console.log(nota)
}

console.log(notas);

notas.push(10); // adiciona um item ao final do array

console.log(notas);

notas.pop(); // remove o último item do array

console.log(notas);

notas.sort(); // ordena o array

console.log(notas);
