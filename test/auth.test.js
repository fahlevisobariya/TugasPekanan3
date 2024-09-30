import supertest from "supertest";
import { expect } from "chai";
import { getAuthToken } from "../authh.js";

const API_URL = "https://kasir-api.zelz.my.id/";

describe("Auth API Test", function () {
  it("should get auth token", async function () {
    const token = await getAuthToken();
    expect(token).to.be.a("string");
  });
});
