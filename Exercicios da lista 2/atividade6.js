function substituirElemento(array, valorAntigo, novoValor) {
    return array.map(item => (item === valorAntigo ? novoValor : item));
}

const array = [1, 2, 3, 2, 4];
const resultado = substituirElemento(array, 2, 5);
console.log(resultado); 
