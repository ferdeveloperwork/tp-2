function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(user => user.email === email);
}
