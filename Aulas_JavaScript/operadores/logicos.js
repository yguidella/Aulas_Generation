import leia from 'readline-sync';

let x = 10;
let y = 5;
let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;
let resposta;
 
proposicao1 = x > y;
console.log(`\n proposição 1: ${proposicao1}`);
 
proposicao2 = x < y;
console.log(`\n proposição 2: ${proposicao2}`);
 
proposicao3 = x != y;
console.log(`\n proposição 3: ${proposicao3}`);
 
proposicao4 = x == y;
console.log(`\n proposição 4: ${proposicao4}`);
 
console.log("\n Conjunção");
 
resposta = proposicao1 ^ proposicao3;
console.log("\nproposicao_01 e proposicao_03: " + resposta);
 
resposta = proposicao2 ^ proposicao4;
console.log("\nproposicao_02 e proposicao_04: " + resposta);
 
resposta = proposicao1 ^ proposicao2;
console.log("\nproposicao_01 e proposicao_02: " + resposta);
 
resposta = proposicao3 ^ proposicao4;
console.log("\nproposicao_03 e proposicao_04: " + resposta);