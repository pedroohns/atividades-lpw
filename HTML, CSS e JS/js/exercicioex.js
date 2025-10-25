//elaborar um algoritmo para ler os coeficientes A, B, C de uma equação do segundo grau levando-se em consideração os seguintes criterios:

// se delta for negativo, exibir a mensagem "nao há solução real"
// se delta for igual a zero, exibir a mensagem "duas raizes reais iguais" e calcular e imprimit a raiz da equação
// se delta for maior que zero, exibir a mensagem "duas raizes reais diferentes" e calcular e imprimir as duas raizes da equação

//delta = b^2 - 4*a*c

//a = 7
//b = 3
//c = 4 

let a = prompt("Digite o valor de A: ");
let b = prompt("Digite o valor de B: ");
let c = prompt("Digite o valor de C: ");

let delta = b ** 2 - 4 * a * c

if (delta < 0) {
    alert("Não há solução real");
}

else if (delta === 0) {
    alert("Duas raízes reais iguais");
    let raiz = -b / (2 * a);
    alert("A raiz da equação é: " + raiz);
}

else {
    alert("Duas raízes reais diferentes");
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("As raízes da equação são: " + raiz1 + " e " + raiz2);
}

console.log("Valor de A: " + a);
console.log("Valor de B: " + b);
console.log("Valor de C: " + c);
console.log("Delta: " + delta);
console.log("Raiz 1: " + raiz1);
console.log("Raiz 2: " + raiz2);
