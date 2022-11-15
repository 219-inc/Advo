import { PrismaClient } from "@prisma/client";

import { User as _user } from "../interfaces";

const prisma = new PrismaClient();

//create user
export async function createUser(user: _user) {
  const newuser = await prisma.user.create({
    data: user,
  });

  return newuser.id;
}

//get user by id
export async function getUser(id: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

//get all users
export async function getUsers() {
  const users = await prisma.user.findMany();

  return users;
}

//update user
export async function updateUser(id: number, user: _user) {
  const updateduser = await prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });

  return updateduser;
}

//delete user
export async function deleteUser(id: number) {
  const deleteduser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return deleteduser;
}

//delete all users
export async function deleteAllUsers() {
  const deletedusers = await prisma.user.deleteMany();

  return deletedusers;
}

//get user by email
export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

//get user by uuid
export async function getUserByUUID(uuid: string) {
  const user = await prisma.user.findUnique({
    where: {
      uuid: uuid,
    },
  });

  return user;
}
