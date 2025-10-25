//Elaborar um algoritmo para testar se 10 números são pares ou ímpares. Deve-se imprimir também, no final, a quantidade de números pares e ímpares digitados. 

let cont, contpar = 0, contimpar = 0;
for (cont = 1; cont <= 10; cont++) {
    let num = parseInt(prompt("Digite um número:"));
    if (num % 2 === 0) {
        alert(`${num} é par`);
        contpar++;
    } else {
        alert(`${num} é ímpar`);
        contimpar++;
    }
}

