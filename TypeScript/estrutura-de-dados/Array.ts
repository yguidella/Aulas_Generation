import readlinesync = require("readline-sync");

// const pessoas: string[] = []; 
// Array tipado que aceita apenas strings e começa vazio.

// const alunos: Array<number> = []; 
// Array tipado que aceita apenas números usando a sintaxe generics.

const notas = new Array<number>(5);  // Cria um array de números com 5 posições já definidas.

for (let i = 0; i < notas.length; i++) {
    notas[i] = readlinesync.questionFloat("Digite a nota: ");
}

console.table(notas);



