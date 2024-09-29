const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { getAuthToken } = require('../auth');
const app = 'https://api.kasirkontrak.com'; // Ganti dengan URL API yang sesuai

describe('Delete Item - DELETE /categories/:id', () => {
  let token;

  before(async () => {
    token = await getAuthToken(); // Mendapatkan token autentikasi
  });

  it('should delete the item', (done) => {
    const itemId = 1; // Ganti dengan ID item yang valid
    request(app)
      .delete(`/categories/${itemId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200); // Assertion 1: Status code harus 200
        expect(res.body.message).to.equal('Item deleted'); // Assertion 2: Pesan respons harus menunjukkan item terhapus
        done();
      });
  });
});
