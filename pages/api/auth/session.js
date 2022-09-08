import { verify } from "jsonwebtoken";
import dotenv from 'dotenv-safe'
import Jwt from "jsonwebtoken";

dotenv.config()


export default async function indexHandler(req, res) {
  try {
    const { mytokenName } = req.cookies;

    const user = verify(mytokenName, process.env.ID);
    return res.json({ status: true });
  } catch (error) {
    console.log(error);
    return res.json({ status: false });
  }
}
