function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}


const persona = { nombre: "Carlos", edad: 25 };
actualizarEdad(persona, 28);
console.log(persona);
