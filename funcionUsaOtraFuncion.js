function procesarArray(arr, funcion) {
    return arr.map(elemento => funcion(elemento));
}

function multiplicarPorDos(numero) {
    return numero * 2;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4];
const resultado = procesarArray(numeros, multiplicarPorDos);
console.log(resultado);
