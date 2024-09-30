import request from "supertest";
import { expect } from "chai";
import { getAuthToken } from "../authh.js";
const app = "https://kasir-api.zelz.my.id";

describe("Delete Item - DELETE /categories/:id", () => {
  let token;

  before(async () => {
    token = await getAuthToken();
  });

  it("should delete the item", (done) => {
    const itemId = "b1ad64ed-34cf-4ceb-a584-4a64fd0467b5";
    request(app)
      .delete(`/categories/${itemId}`)
      .set("Authorization", `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        // expect(res.body.message).to.equal("Item deleted");
        console.log(res.body);
        done();
      });
  });
});
