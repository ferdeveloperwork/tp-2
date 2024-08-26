function mapearUsuarios(usuarios) {
    return usuarios.map(user => ({
        nombre: user.name,
        email: user.email
    }));
}
