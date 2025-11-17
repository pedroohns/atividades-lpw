//PARTE 4 - PROBLEMA INTEGRADO (MAP, FILTER E REDUCE)

const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 8 },
    { nome: "Diego", nota: 4 },
    { nome: "Eduarda", nota: 7 }
]; 

//problema 1 - aprovados (utilizando filter)
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovados);

//problema 2 - nome dos aprovados (utilizando map)
const nomeAprovados = aprovados.map(aluno => aluno.nome);
console.log(nomeAprovados);

//problema 3 - media das notas da turma (utilizando reduce)
const soma = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
}, 0);

const media = soma / alunos.length;
console.log(media);