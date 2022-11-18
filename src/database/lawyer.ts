import prisma from ".";
import { _lawyer } from "../types";

import bcrypt from "bcrypt";

//create lawyer
export async function createLawyer(lawyer: any) {
  const newlawyer = await prisma.lawyer.create({
    data: {
      ...lawyer,
      password: await bcrypt.hash(lawyer.password, 10),
    },
  });

  return newlawyer.id;
}

//get lawyer by uuid
export async function getLawyer(id: string) {
  const lawyer = await prisma.lawyer.findUnique({
    where: {
      id,
    },
  });

  return lawyer;
}

//get lawyer by email
export async function getLawyerByEmail(email: string, select: any = {}) {
  const lawyer = await prisma.lawyer.findUnique({
    where: {
      email,
    },
    select,
  });

  return lawyer;
}

//get all lawyers
export async function getAllLawyers() {
  const lawyers = await prisma.lawyer.findMany();

  return lawyers;
}
