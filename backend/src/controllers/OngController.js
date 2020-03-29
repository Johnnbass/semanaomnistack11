const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

  async index (request, response) {
    const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX"); // gera o id da ong utilizando a lib de criptografia

    await connection("ongs").insert({
      // await aguarda o comando de insert finalizar para prosseguir
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
