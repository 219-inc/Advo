import prisma from ".";
import { User as _user } from "../types";

//create user
export async function createUser(user: _user) {
  const newuser = await prisma.user.create({
    data: {
      ...user,
      password: user.password as string,
    },
  });

  return newuser.id;
}

//get user by id
export async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      password: true,
    },
  });

  return user;
}

//get all users
export async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
    },
  });

  return users;
}

//update user
export async function updateUser(id: string, user: _user) {
  const updateduser = await prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });

  return updateduser;
}

//delete user
export async function deleteUser(id: string) {
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
export async function getUserByEmail(email: string, getPassword = false) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      password: getPassword ? true : false,
    },
  });

  return user;
}
