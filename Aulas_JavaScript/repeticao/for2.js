import leia from 'readline-sync';

let nome, idade;
const lista = [4];

/*
i = 0 = " ", 17
i = 1
i = 2
i = 3
i = 4  [5]
**/

for(let i = 0; i <=5; i++){
    nome = leia.question("Qual o seu nome? ");
    idade = leia.questionInt("Qual a sua idade? ");
    lista.push({nome,idade});
}

console.log(lista);

