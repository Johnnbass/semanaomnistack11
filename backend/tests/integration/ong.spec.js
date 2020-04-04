const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    /**
     * Dica: rodar o rollback da migration antes de atualizar para
     * que o teste anterior não influencie no próximo e para que a
     * base de testes não seja incrementada infinitamente.
     */
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ON', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAE2",
        email: "contato@apae.com.br",
        whatsapp: "51999999999",
        city: "Eldorado do Sul",
        uf: "RS"
      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});