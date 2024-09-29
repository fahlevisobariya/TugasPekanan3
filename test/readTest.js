const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { getAuthToken } = require('../auth');
const app = 'https://kasir-api.zelz.my.id'; // API Kasir yang baru

describe('Read Item - GET /categories/:id', () => {
  let token;

  before(async () => {
    token = await getAuthToken(); // Mendapatkan token autentikasi
  });

  it('should return the item details', (done) => {
    const itemId = 1; // ID item valid
    request(app)
      .get(`/categories/${itemId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);

        // Assertion 1: Status harus 200 (OK)
        expect(res.status).to.equal(200);

        // Assertion 2: Respons harus mengandung properti 'name'
        expect(res.body.data).to.have.property('name');
        done();
      });
  });
});
