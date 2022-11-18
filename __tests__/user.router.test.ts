import supertest from "supertest";
import Server from "../src/app";

const app = Server();

let routes = {
  default: {
    path: "/api/v1/users",
  },
  login: {
    path: "/login",
  },
};

describe("User Router Test", () => {
  let accesstoken: string | null = null;

  //get accesstoken from login before running tests
  beforeAll(async () => {
    const response = await supertest(app).post(routes.login.path).send({
      email: "john.doe@gmail.com",
      password: "blabla",
    });

    accesstoken = response.body.tokens.accessToken;
  });

  //Test to check if user router is working
  describe("GET /", () => {
    //should return 200 code
    test("It should respond with 200", async () => {
      const response = await supertest(app)
        .get(routes.default.path)
        .set("authorization", `Bearer ${accesstoken}`);

      expect(response.statusCode).toBe(200);
    });

    //should have json content type
    test("It should respond with json", async () => {
      const response = await supertest(app)
        .get(routes.default.path)
        .set("authorization", `Bearer ${accesstoken}`);
      console.log(response.body);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    //should return success msg and current user
    test("It should respond with success msg and current user", async () => {
      const response = await supertest(app)
        .get(routes.default.path)
        .set("authorization", `Bearer ${accesstoken}`);

      expect(response.body).toEqual(
        expect.objectContaining({
          msg: expect.any(String),
          user: expect.any(Object),
        })
      );
    });

    //should return Unauthorized error and 401 code
    test("It should respond with Unauthorized error and 401 code", async () => {
      const response = await supertest(app).get(routes.default.path);

      expect(response.statusCode).toBe(401);
      expect(response.body).toEqual(
        expect.objectContaining({
          msg: expect.any(String),
        })
      );
    });
  });
});
