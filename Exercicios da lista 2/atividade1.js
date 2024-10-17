function contarOcorrencias(numeros) {
    const frequencias = {};

    numeros.forEach(function(numero) {
        if (frequencias[numero]) {
            frequencias[numero]++;
        } else {
            frequencias[numero] = 1;
        }
    });

    return frequencias;
}

const listaDeNumeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const resultado = contarOcorrencias(listaDeNumeros);
console.log(resultado);
