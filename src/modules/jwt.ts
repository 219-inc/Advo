import jwt from "jsonwebtoken";

async function generateToken(data: any, expiresIn: string = "1h") {
  return jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn,
  });
}

async function decodeToken(token: string) {
  const data = await jwt.verify(token, process.env.JWT_SECRET as string);
  return data;
}

export { generateToken, decodeToken };
