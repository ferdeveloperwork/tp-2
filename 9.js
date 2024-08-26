
9

const estudiante = {
    nombre: 'Pedro',
    edad: 20,
    notas: [90, 80, 70]
};

const copia = JSON.parse(JSON.stringify(estudiante));

copia.nombre = 'Ana';
copia.notas.push(60);

console.log(estudiante);
console.log(copia);