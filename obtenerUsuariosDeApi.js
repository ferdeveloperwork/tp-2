async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('Lista de usuarios:', data);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}
