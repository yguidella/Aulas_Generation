const leia = require('readline-sync');
 
let senhaCorreta = "1234";
let senhaDigitada = "";
let contador = 0;

 
while (senhaDigitada !== senhaCorreta) {
  contador ++;
  senhaDigitada = leia.question("Digite a senha: ");
  if(contador ===3){
    console.log("Acabou as tentativas! Acesso negado!");
    break;
  }
}
 
console.log("Acesso liberado");