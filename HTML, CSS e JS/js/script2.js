


let idade = Number(prompt("Quantos anos você tem?"));
if (!isNaN(idade) && idade > 0 && Number.isInteger(idade)) {
if (idade >= 18) {
alert("Você é maior de idade.");
} else {
alert("Você é menor de idade.");
}
} else {
alert("Por favor, insira um número válido.");
}
