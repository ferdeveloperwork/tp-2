function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso:
const resultado = factorial(5);
console.log(`El factorial de 5 es: ${resultado}`);
