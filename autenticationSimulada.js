function autenticarUsuario(credenciales) {
    // Usuario predefinido (simulado)
    const usuarioValido = {
        usuario: 'miusuario',
        contraseña: 'micontraseña'
    };

    return (
        credenciales.usuario === usuarioValido.usuario &&
        credenciales.contraseña === usuarioValido.contraseña
    );
}
