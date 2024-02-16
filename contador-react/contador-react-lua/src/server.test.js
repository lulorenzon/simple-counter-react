// server.test.js
const request = require('supertest');
const app = require('./server');

describe('Testes do Servidor', () => {
  it('Deve retornar todas as cidades', async () => {
    const response = await request(app).get('/cidades');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0); // Ajuste conforme necessário
  });

  it('Deve adicionar uma nova cidade', async () => {
    const novaCidade = { nome: 'Nova Cidade', aeroportos: [{ nome: 'Aeroporto Novo' }] };
    const response = await request(app).post('/cidades').send(novaCidade);
    expect(response.status).toBe(201);
    expect(response.body.nome).toBe('Nova Cidade');
    expect(response.body.aeroportos).toHaveLength(1);
  });
});
