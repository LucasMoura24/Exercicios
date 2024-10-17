function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 28 }
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);
