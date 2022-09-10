import { verify } from "jsonwebtoken";

export default async function revitionHandler(req, res) {
  try {
    const { mytokenName } = req.cookies;
    const user = verify(mytokenName, process.env.DB_SECRET_ID);
    if (user !== undefined) {
      return res.status(200).json({ status: true });
    }
  } catch (error) {
    console.error(error);
    return res.json({ status: false });
  }
}
