//Elaborar um algoritmo que leia 10 números inteiros e calcule o produto dos números pares e divisíveis por 5 maiores do que um número de referência qualquer digitado pelo usuário.

//Ex: Número de referência digitado pelo usuário: 9
//10 Números digitados pelo usuário: 5, 10, 9, 15, 20, 8, 10, 1, 12, 35 
//Produto: 10 x 20 x 10 = 2000

let cont, contpar = 0, contimpar = 0;
let produto = 1;
let ref = parseInt(prompt("Digite um número de referência:"));

for (cont = 1; cont <= 10; cont++) {
    let num = parseInt(prompt("Digite um número:"));
    if (num % 2 === 0 && num > ref && num % 5 === 0) {
        produto *= num;
        contpar++;
    } else {
        contimpar++;
    }
}

alert(`Produto dos números pares e divisíveis por 5 maiores que ${ref}: ${produto}`);
alert(`Quantidade de números pares: ${contpar}`);
alert(`Quantidade de números ímpares: ${contimpar}`);


