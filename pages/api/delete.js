import { pool } from "./config/db";
import Jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    const { mytokenName } = req.cookies;
    const user = verify(mytokenName, process.env.DB_SECRET_ID);
    const [result] = await pool.query(
      `SELECT * FROM user WHERE UserName = "${user.UserName}";`
    );
    await pool.query(`DELETE FROM score_user WHERE user_id = ${result[0].id}`);
  } catch (error) {
    console.log(error);
  }
}
