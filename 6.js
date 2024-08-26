
6

function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
}

const producto = {
    nombre: 'iPhone 13',
    precio: 999.99,
    disponible: true
};

console.log(tienePropiedad(producto, 'nombre')); // true
console.log(tienePropiedad(producto, 'color')); // false