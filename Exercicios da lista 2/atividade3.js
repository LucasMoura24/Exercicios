function separarParesImpares(numeros) {
    const resultado = {
        pares: [],
        impares: []
    };

    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            resultado.pares.push(numero);
        } else {
            resultado.impares.push(numero);
        }
    });

    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separados = separarParesImpares(numeros);
console.log(separados);
