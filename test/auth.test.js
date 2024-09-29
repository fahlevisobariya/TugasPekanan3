// test/auth.test.js
const { expect } = require('chai');
const { gettoken } = require('../authh.cjs'); // Pastikan jalur ini benar

describe('Auth Module', () => {
  it('should return a valid token', async () => {
    const token = await gettoken();
    
    // Assertion 1: Pastikan token tidak null atau undefined
    expect(token).to.exist;

    // Assertion 2: Pastikan token adalah string
    expect(token).to.be.a('string');
  });
});
