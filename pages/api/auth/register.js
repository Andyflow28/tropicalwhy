import { pool } from "../../../config/db";
import dotenv from 'dotenv-safe'

dotenv.config()


export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM user;");
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { UserName, password } = req.body;
    const result = await pool.query("INSERT INTO user SET ?", {
      UserName,
      password,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
