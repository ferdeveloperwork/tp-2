
8

const persona1 = {
    nombre: 'Juan',
    edad: 30
};

const persona2 = {
    ocupacion: 'Ingeniero',
    ciudad: 'Madrid'
};

const persona = Object.assign({}, persona1, persona2);

console.log(persona);