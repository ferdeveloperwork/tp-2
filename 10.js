
10

const libro = {
    titulo: 'El Señor de los Anillos',
    autor: 'J.R.R. Tolkien',
    _añoDePublicacion: 1954, // Nota la propiedad privada con guión bajo

    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    set añoDePublicacion(año) {
        if (año > 0) {
            this._añoDePublicacion = año;
        } else {
            console.error('El año de publicación debe ser un número positivo');
        }
    }
};

console.log(libro.añoDePublicacion);

libro.añoDePublicacion = 1960;
console.log(libro.añoDePublicacion);

libro.añoDePublicacion = -1; 