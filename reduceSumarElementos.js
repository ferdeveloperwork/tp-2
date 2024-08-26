function sumarElementos(numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

const numerosOriginales = [1, 2, 3, 4, 5];
const sumaTotal = sumarElementos(numerosOriginales);
console.log('Suma total de elementos:', sumaTotal);
