//PARTE 1 - TRANSFORMAÇÃO UTILIZANDO MAP

const produtos = [
    {nome: "Camisa", preco: 50},
    {nome: "Calça", preco: 80},
    {nome: "Tenis", preco: 120},
    {nome: "Boné", preco: 40}
];

const precoComDesconto = produtos.map(produto => {
     return {
        nome: produto.nome,
        preco: produto.preco * 0.85
     }
});

console.log(precoComDesconto);