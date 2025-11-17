//PARTE 2 - TRANSFORMAÇÃO UTILIZANDO FILTER

const produtos = [
    {nome: "Camisa", preco: 50},
    {nome: "Calça", preco: 80},
    {nome: "Tenis", preco: 120},
    {nome: "Boné", preco: 40}
];

//const produtosCaros = produtos.filter(produto => produto.preco > 60);
//const produtosBaratos = produtos.filter(produto => produto.preco <= 60);

const produtosCaros = produtos.filter(produto => {
    if (produto.preco > 60) {
        return true;
    } else {
        return false;
    }
});

const produtosBaratos = produtos.filter(produto => {
    if (produto.preco <= 60) {
        return true
    } else {
        return false
    }
});

//olá professor, eu fiz dessa maneira porque acabei "julgando" que a logica necessitava de condicionais, mas depois dei uma lida no material e em outras fontes e percebi que o filter meio que ja espera um dado booleano, entao nao precisa de if e else, da pra fazer de forma mais simplificada.

//isso significa que ficaria mais ou menos como nos comentarios que deixei logo abaixo da array dos produtos