// auth.js
const request = require('supertest');
const app = 'https://kasir-api.zelz.my.id'; // URL API Kasir

let token;

async function gettoken() {
  // Cek apakah token sudah ada
  if (!token) {
    try {
      const response = await request(app)
        .post('/authentications') // Endpoint login
        .send({ email: 'fahlevisobariya10@gmail.com', password: 'Pass@word1' }); // Masukkan email dan password yang valid

      // Periksa apakah responsnya berhasil
      if (response.status !== 200) {
        throw new Error('Failed to authenticate'); // Tangani error jika status tidak 200
      }

      // Periksa apakah respons mengandung token
      if (!response.body.data || !response.body.data.token) {
        throw new Error('Token not found in response');
      }

      token = response.body.data.token; // Dapatkan token dari respons
    } catch (error) {
      console.error('Error getting token:', error.message);
      throw error; // Buang error jika ada
    }
  }
  return token; // Kembalikan token
}

// module.exports = { gettoken };
module.exports = token;
