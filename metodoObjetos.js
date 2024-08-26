//3. Métodos en Objetos:
//○ Añade un método llamado descripción al objeto libro que devuelva
//una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.

const libro = {
    título: 'El Señor de los Anillos',
    autor: 'J.R.R. Tolkien',
    añoDePublicacion: 1954,
    descripción: function () {
        return `El Libro "${this.título}" fue escrito por ${this.autor}.`;
    }
};

console.log(libro.descripción());