function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(num => num > referencia);
}

const numerosOriginales = [10, 20, 30, 40, 50];
const referencia = 25;
const numerosFiltrados = filtrarMayoresDe(numerosOriginales, referencia);
console.log('Números mayores que', referencia + ':', numerosFiltrados);
