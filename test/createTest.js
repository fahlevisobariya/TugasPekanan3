import request from 'supertest';
import { expect } from 'chai'; // Dynamic import tidak diperlukan di ESM
import { gettoken } from '../authh.cjs'; // Perhatikan ekstensi .js di ESM
const app = 'https://kasir-api.zelz.my.id'; // API endpoint

describe('Create Item - POST /categories', () => {
  let token;

  before(async () => {
    token = await gettoken();
  });

  it('should create a new item', async () => {
    const res = await request(app)
      .post('/categories')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Minuman',
        description: 'ini minuman',
      });

    // Assertion 1: Status harus 201
    expect(res.status).to.equal(201);

    // Assertion 2: Respons harus mengandung properti 'id'
    expect(res.body.data).to.have.property('id');
  });
});
