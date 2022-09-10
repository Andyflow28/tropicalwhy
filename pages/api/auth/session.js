import { verify } from "jsonwebtoken";

export default async function indexHandler(req, res) {
  try {
    const { mytokenName } = req.cookies;

    const user = verify(mytokenName, process.env.DB_SECRET_ID);
    return res.json({ status: true });
  } catch (error) {
    console.log(error);
    return res.json({ status: false });
  }
}
