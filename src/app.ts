import express from "express";
import { createUser, getUsers } from "./database/user";
import { User } from "./interfaces";

export default function () {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.get("/allUsers", async (req, res) => {
    const users = await getUsers();
    res.send(users);
  });

  app.post("/user", async (req, res) => {
    let userId = await createUser({
      email: "john.doe@gmail.com",
      firstname: "John",
      lastname: "Doe",
      uuid: "123456789",
      password: "123",
    } as User);

    res.send({ userId });
  });

  return app;
}
