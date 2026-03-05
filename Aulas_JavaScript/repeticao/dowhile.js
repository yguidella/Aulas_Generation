import leia from 'readline-sync';
 
let continuar = false;
 
do{
    console.log("=====Jogo da Adivinhação=====");
    let numero = leia.questionInt("Digite um número: ");
    const numeroSecreto = Math.floor(Math.random() * 10);
 
    if(numero == numeroSecreto){
        console.log("Acertou!");
        break
    }else{
        console.log("Errou!")
    }
 
    continuar = leia.keyInYN("Para continuar jogando pague R$350. Deseja continuar? ");
 
}while(continuar);