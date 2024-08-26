async function imprimirNombresDeUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const nombres = data.map(user => user.name);
        console.log('Nombres de usuarios:', nombres);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}
