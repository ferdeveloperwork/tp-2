async function enviarDatos(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json();
        console.log('Respuesta de la API:', responseData);
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
}
