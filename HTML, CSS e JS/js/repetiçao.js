// comando for

// o algoritmo abaixo imprime os números de 1 a 100 e conta quantos números pares existem entre eles

let cont, contpar = 0;
for (cont = 1; cont <= 100; cont++) {
    if (cont % 2 === 0)
    console.log(cont);
    contpar++;
}
console.log(`Total de números pares: ${contpar}`);


///console.log(cont);