import supertest from "supertest";
const API_URL = "https://kasir-api.zelz.my.id";

async function getAuthToken() {
  const response = await supertest(API_URL).post("/authentications").send({
    email: "fahlevisobariya10@gmail.com",
    password: "Pass@word1",
  });

  // Log status dan body dari respons untuk debugging
  console.log("Status Code:", response.status);
  console.log("Response Body:", response.body);

  // Periksa apakah accessToken ada di respons
  if (response.body && response.body.data && response.body.data.accessToken) {
    return response.body.data.accessToken; // Mengembalikan accessToken
  } else {
    throw new Error("Token tidak ditemukan");
  }
}

export { getAuthToken };
