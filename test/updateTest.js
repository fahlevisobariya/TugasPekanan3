import request from "supertest";
import { expect } from "chai";
import { getAuthToken } from "../authh.js";
const app = "https://kasir-api.zelz.my.id";
describe("Update Item - PUT /categories/:id", () => {
  let token;

  before(async () => {
    token = await getAuthToken(); // Mendapatkan token autentikasi
  });

  it("should update the item details", (done) => {
    const itemId = "394ee0ac-7d0f-4caa-99c2-1f205a65c13e"; // Ganti dengan ID item yang valid
    request(app)
      .put(`/categories/${itemId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Susu",
        description: "Susu Kambings",
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200); // Assertion 1: Status code harus 200
        // expect(res.body).to.have.property("name").eql("Updated Item"); // Assertion 2: Nama item harus diperbarui
        console.log(res.body);
        done();
      });
  });
});
