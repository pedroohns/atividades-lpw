//Elaborar um algoritmo que faça a tabuada de um número inteiro digitado pelo usuário, mas a tabuada não necessariamente deve iniciar em 1 e terminar em 10. Os valores inicial e final devem ser informados pelo usuário, conforme exemplo abaixo. Deve-se fazer a proteção de dados para que o usuário não digite um valor final menor do que o valor inicial.

// Montar tabuada do número: 5
//Começa em: 4
//Termina em: 7

//5x4= 20
//5x5= 25
//5x6= 30
//5x7= 35

let num = parseInt(prompt("Digite um número para fazer a tabuada:"));
let inicio = parseInt(prompt("Digite o valor inicial:"));
let fim = parseInt(prompt("Digite o valor final:"));

if (fim < inicio) {
    alert("Valor final não pode ser menor que o valor inicial.");
}

else {
    for (let i = inicio; i <= fim; i++) {
        let resultado = num * i;
        alert(`${num} x ${i} = ${resultado}`);
    }
}

