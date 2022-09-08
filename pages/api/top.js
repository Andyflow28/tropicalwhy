import { pool } from "../../config/db";
import dotenv from 'dotenv-safe'

dotenv.config()

export default async function handler(req, res) {
  return await saveBuy(req, res);
}

const saveBuy = async (req, res) => {
  try {
    let user = [];
    const [top] = await pool.query(
      `SELECT score FROM score_user ORDER BY score DESC LIMIT 10`
    );
    if (top[0] !== undefined) {
      for (let i = 0; i <= 9; i++) {
        const [resultId] = await pool.query(
          `SELECT * FROM score_user WHERE score = ${top[i].score}`
        );
        if (resultId[0] !== undefined) {
          const [resultTotal] = await pool.query(
            `SELECT * FROM user WHERE id = ${resultId[0].user_id}`
          );
          if (resultTotal[0] !== undefined) {
            user.push(resultTotal[0].UserName);
          }
        }
      }
    }
    res.status(200).json({ userTop: user, top: top });
  } catch (error) {
    console.log(error);
  }
};
