import supertest from "supertest";
import Server from "../src/app";

const app = Server();

describe("GET /", () => {
  //it should return 200 code

  test("It should respond with 200", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  //it should return Hello World

  test("It should respond with Hello World", async () => {
    const response = await supertest(app).get("/");
    expect(response.text).toBe("Hello World");
  });
});
