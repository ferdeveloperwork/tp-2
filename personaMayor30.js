const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 40 },
    { nombre: 'Elena', edad: 32 }
];

const personaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log('Primera persona mayor de 30 años:', personaMayorDe30);
