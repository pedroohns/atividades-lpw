//comando break

for (count = 1; count <= 10; count++) {
    if (count === 5) {
        break;
    }
    console.log("O numero atual é" , count);
}

//comando continue

for (count = 1; count <= 10; count++) {
    if (count === 5) {
        continue;
    }
    console.log("O numero atual é" , count);
}   

///

num = number(prompt("Digite um número:"));