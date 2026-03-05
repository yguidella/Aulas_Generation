import leia from 'readline-sync';

let continuar = false;

continuar = leia.keyInYN("Quer acessar a tabuada?");

while(continuar){
    
    let numero = leia.questionInt("Digite um numero: ");
    
    for (let contador = 1; contador <=10; contador++){
        console.log (`${numero} x ${contador} = ${contador * numero}`);
    }
}