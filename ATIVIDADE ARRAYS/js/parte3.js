//PARTE 3 - REDUÇÃO COM REDUCE

const pedidos = [
    { cliente: "Ana", total: 150 },
    { cliente: "Bruno", total: 200 },
    { cliente: "Carla", total: 100 },
    { cliente: "Daniel", total: 180 }
];

const valorTotal = pedidos.reduce((acumulador, pedido) => {
    return acumulador + pedido.total;
}, 0);

console.log(valorTotal);