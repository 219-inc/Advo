import supertest from "supertest";
import Server from "../src/app";

const app = Server();

//test to check if server is connected to the database

describe("Is server connected to the database", () => {});

describe("GET /allUsers", () => {
  //should return 200 code

  test("It should respond with 200", async () => {
    const response = await supertest(app).get("/allUsers");
    expect(response.statusCode).toBe(200);
  });

  //should have json content type

  test("It should respond with json", async () => {
    const response = await supertest(app).get("/allUsers");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  //should return all users

  test("It should respond with all users", async () => {
    const response = await supertest(app).get("/allUsers");
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          firstname: expect.any(String),
          lastname: expect.any(String),
          email: expect.any(String),
          uuid: expect.any(String),
        }),
      ])
    );
  });
});
