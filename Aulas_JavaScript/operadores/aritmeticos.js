import leia from 'readline-sync';

let numero1;
let numero2;
let resultado;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

resultado = numero1 % numero2;

console.log(`O resultado é ${numero1} e ${numero2} = ${resultado} `);
