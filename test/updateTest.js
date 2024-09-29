const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { getAuthToken } = require('../auth');
const app = 'https://api.kasirkontrak.com'; // Ganti dengan URL API yang sesuai

describe('Update Item - PUT /categories/:id', () => {
  let token;

  before(async () => {
    token = await getAuthToken(); // Mendapatkan token autentikasi
  });

  it('should update the item details', (done) => {
    const itemId = 1; // Ganti dengan ID item yang valid
    request(app)
      .put(`/categories/${itemId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated Item',
        price: 2000
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200); // Assertion 1: Status code harus 200
        expect(res.body).to.have.property('name').eql('Updated Item'); // Assertion 2: Nama item harus diperbarui
        done();
      });
  });
});
