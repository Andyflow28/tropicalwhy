import { pool } from "../../config/db";
import dotenv from 'dotenv-safe'

dotenv.config()

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      return await getCards(req, res);
    } else {
      console.log("no se pudo obtener los datos");
    }
  } catch (error) {
    console.log(error);
  }
}

const getCards = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM card;");
  return res.status(200).json(result);
};
