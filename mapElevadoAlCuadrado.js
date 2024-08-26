function elevarAlCuadrado(numeros) {
    return numeros.map(num => num ** 2);
}

const numerosOriginales = [1, 2, 3, 4, 5];
const numerosElevados = elevarAlCuadrado(numerosOriginales);
console.log('Números elevados al cuadrado:', numerosElevados);
