//2. Anidación de Objetos:
//○ Crea un objeto llamado estudiante con propiedades nombre, edad y
//direccion. direccion debe ser otro objeto con propiedades calle,
//ciudad y pais. Imprime la dirección completa del estudiante.

const estudiante = {
    nombre: 'Juan Pérez',
    edad: 25,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Ciudad de México',
        pais: 'México'
    }
};

console.log(`La dirección del estudiante es: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);