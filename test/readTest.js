import request from "supertest";
import { expect } from "chai";
import { getAuthToken } from "../authh.js";
const app = "https://kasir-api.zelz.my.id";

describe("Read Item - GET /categories/:id", () => {
  let token;

  before(async () => {
    token = await getAuthToken();
  });

  it("should return the item details", async function () {
    const itemId = "394ee0ac-7d0f-4caa-99c2-1f205a65c13e";
    const response = await request(app)
      .get(`/categories/${itemId}`)
      .set("Authorization", `Bearer ${token}`);

    console.log("Get User Status Code:", response.status);
    console.log("Get User Response Body:", response.body);

    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("success");
    console.log(response.body);
  });
});
