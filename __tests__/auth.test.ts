import supertest from "supertest";
import Server from "../src/app";

const app = Server();

let routes = {
  login: {
    path: "/login",
    userData: {
      email: "john.doe@gmail.com",
      password: "blabla",
    },
  },
  register: {
    path: "/register",
    userData: {
      email: "jane.doe@gmail.com",
      password: "blabla",
      firstname: "Jane",
      lastname: "Doe",
    },
  },
};

describe("Auth Router Test", () => {
  // Test for login
  describe("POST /login", () => {
    //should return 200 code
    test("It should respond with 200", async () => {
      const response = await supertest(app)
        .post(routes.login.path)
        .send(routes.login.userData);

      expect(response.statusCode).toBe(200);
    });

    //should have json content type
    test("It should respond with json", async () => {
      const response = await supertest(app)
        .post(routes.login.path)
        .send(routes.login.userData);

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    //should return success msg and tokens
    test("It should respond with success msg and tokens", async () => {
      const response = await supertest(app)
        .post(routes.login.path)
        .send(routes.login.userData);

      expect(response.body).toEqual(
        expect.objectContaining({
          msg: expect.any(String),
          tokens: {
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          },
        })
      );
    });

    //should return 404 code and a msg containing user not found if user not found
    test("It should respond with 404 and a msg containing user not found if user not found", async () => {
      const response = await supertest(app)
        .post(routes.login.path)
        .send({ ...routes.login.userData, email: "blabla@gmail.com" });

      expect(response.statusCode).toBe(404);
      expect(response.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("User not found"),
        })
      );
    });

    //should return 401 code and a msg containing invalid credentials if password is incorrect
    test("It should respond with 401 and a msg containing invalid credentials if password is incorrect", async () => {
      const response = await supertest(app)
        .post(routes.login.path)
        .send({ ...routes.login.userData, password: "blabla_incorrect" });

      expect(response.statusCode).toBe(401);
      expect(response.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("Invalid credentials"),
        })
      );
    });
  });

  // Test for register
  describe("POST /register", () => {
    //should return 200 code and a msg containing user registered or 400 code and msg containing missing fields
    test("It should respond with 200 and a msg containing user registered or 400 code and msg containing missing fields", async () => {
      const response = await supertest(app)
        .post(routes.register.path)
        .send(routes.register.userData);

      if (response.statusCode === 200) {
        expect(response.body).toEqual(
          expect.objectContaining({
            msg: expect.stringContaining("User registered"),
            tokens: {
              accessToken: expect.any(String),
              refreshToken: expect.any(String),
            },
          })
        );
      } else if (response.statusCode === 400) {
        expect(response.body).toEqual(
          expect.objectContaining({
            message: expect.stringContaining("All fields are required"),
          })
        );
      }
    });

    //should return 404 code and a msg containing email already exists if email already exists
    test("It should respond with 404 and a msg containing email already exists if email already exists", async () => {
      const response = await supertest(app)
        .post(routes.register.path)
        .send(routes.register.userData);

      expect(response.statusCode).toBe(404);
      expect(response.body).toEqual(
        expect.objectContaining({
          message: expect.stringContaining("User already exists"),
        })
      );
    });
  });
});
