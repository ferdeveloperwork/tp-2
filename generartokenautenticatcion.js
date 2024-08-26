function generarToken(usuario) {
    // Simulación de generación de token JWT
    const token = btoa(JSON.stringify(usuario));
    return token;
}
