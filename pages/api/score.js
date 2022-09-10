import { pool } from "./config/db";
import Jwt from "jsonwebtoken";

export default async function handler(req, res) {
  return await saveProduct(req, res);
}

const saveProduct = async (req, res) => {
  try {
    const { mytokenName } = req.cookies;

    const user = Jwt.verify(mytokenName, process.env.DB_SECRET_ID);
    const { value } = req.body;

    const [result] = await pool.query(
      `SELECT * FROM user WHERE UserName = "${user.UserName}";`
    );
    if (result[0] !== undefined) {
      const resu = await pool.query(
        `INSERT INTO score_user (user_id, score) values (${result[0].id}, ${value});`
      );
    }
    return res.status(200).json({ insert: true });
  } catch (error) {
    console.log(error);
  }
};
