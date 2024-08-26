//4. Iteración sobre Propiedades de un Objeto:
//○ Crea un objeto producto con propiedades como nombre, precio y
//disponible. Usa un bucle for...in para imprimir todas las propiedades
//y sus valores.

const producto = {
    nombre: 'productGen',
    precio: 999.99,
    disponible: true
};

for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}





