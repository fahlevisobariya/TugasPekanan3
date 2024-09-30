import request from "supertest";
import { expect } from "chai";
import { getAuthToken } from "../authh.js";
const app = "https://kasir-api.zelz.my.id";

describe("Create Item - POST /categories", () => {
  let token;

  before(async () => {
    token = await getAuthToken();
  });

  it("should create a new item", async () => {
    const res = await request(app)
      .post("/categories")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Minuman",
        description: "ini minuman",
      });

    // Assertion 1: Status harus 201
    expect(res.status).to.equal(201);

    // Assertion 2: Respons harus mengandung properti 'id'
    expect(res.body.data).to.have.property("name");
  });
});
