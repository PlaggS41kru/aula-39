const { Usuario } = require("../models/Usuario");
const { db } = require("../../prisma/main")

class RepositorioDeUsuario {
  async buscarTodos() {
    return await db.user.findMany();
  }

  criar(usuario) {
    const user = user.prisma.create({
      data:{
        email: 'exm@gexm.com',
        senha: '12345',
      }
     })
    return usuario.salvar();
  }

   async buscarPeloEmail(email) {
    return await Usuario.buscarPeloEmail(email);
  }

  async buscarPeloId(id) {
    return Usuario.buscarPeloId(id);
  }

   async atualizar(usuarioId, dadosAtualizados) {
    return await db.user.atualizar(usuarioId, dadosAtualizados);
  }

  deletarUmUsuario(id) {
    return db.user.deletarUmUsuario(id);({
      where: {
      id: usuarioId
    },
    })
  }
}

module.exports = new RepositorioDeUsuario();
