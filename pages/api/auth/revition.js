import { verify } from "jsonwebtoken";
import dotenv from "dotenv-safe";
import Jwt from "jsonwebtoken";

dotenv.config();

export default async function revitionHandler(req, res) {
  try {
    const { mytokenName } = req.cookies;
    console.log(mytokenName);
    const user = verify(mytokenName, process.env.ID);
    console.log(user);
    if (user !== undefined) {
      return res.status(200).json({ status: true });
    }
  } catch (error) {
    console.error(error);
    return res.json({ status: false });
  }
}
