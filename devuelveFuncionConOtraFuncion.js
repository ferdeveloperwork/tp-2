function crearMultiplicador(x) {
    return function (numero) {
        return x * numero;
    };
}

// Uso de la función creada
const multiplicarPor5 = crearMultiplicador(5);
console.log(multiplicarPor5(3)); // Resultado: 15
